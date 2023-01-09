import type { Node } from "./StructuralSolverApp";

// Used to find the closest node to a coordinate (ie. user click). Returns the closed node and the distance
const closestNode = (x: number, y: number, nodeList: Node[]) => {
  let closeNode: Node | null = null;
  if (nodeList) closeNode = nodeList[0];

  let minDistance = Infinity;
  for (const node of nodeList) {
    const distance = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
    if (distance < minDistance) {
      closeNode = node;
      minDistance = distance;
    }
  }
  return { closeNode, minDistance };
};

async function solveStructure(
  nodeDict: Map<number, Node>,
  adjacencyDict: Map<number, Set<number>>,
  systemProperties = {
    youngsModulus: 69e9, //Example Stiffness of Links (Aluminum) (N/m)
    linkCrossSectionalArea: 0.0001, //Example crossectional area
    gravitationAcceleration: 9.81, //Acceleration due to gravity (m/s^2)
    linearDensity: 10, //Linear Density of Links   (kg/m)
    groundReference: 500, //Height of ground reference
    pixelToMeterRatio: 100,
    groundStiffnessFactor: 500,
    groundFrictionalFactor: 1,
  }
) {
  // console.log(systemProperties);
  //Convert Dictionary Representation to Matrix-based representations
  //Start by making the positional vectors for the nodes
  const nodeComboList = Array.from(nodeDict.entries());
  nodeComboList.sort((a, b) => a[0] - b[0]);
  const nodeList = nodeComboList.map((ele) => [ele[1].x, ele[1].y]); //Store the info in array of [xpos,ypos]

  const massList = nodeComboList.map((ele) => ele[1].mass); //Mass matrix accounts for the mass of each node
  const fixedNodesIndicies: Set<number> = new Set([]); //Used to determine which nodes are to be used in the optimization.
  for (let i = 0; i < nodeComboList.length; i++)
    if (nodeComboList![i][1].isFixed) fixedNodesIndicies.add(i);

  const idToIndex = new Map(nodeComboList.map((ele, i) => [ele[0], i]));
  const indexToId = new Map(nodeComboList.map((ele, i) => [i, ele[0]]));

  //We will need to get the unstressed length of each link. This can double as the adjacency matrix
  // We can also ge the mass matrix which accounts for the weight of the links by distributing thier mass to the two connected nodes evenly
  // We can also cache the stiffness of each member based on the inital length
  const adjacencyMatrix: number[][] = [...Array(nodeList.length)].map(
    (ele) => Array(nodeList.length).fill(0) //Create an placeholder array of 0 (representing no edge)
  );
  const stiffnessMatrix: number[][] = [...Array(nodeList.length)].map(
    (ele) => Array(nodeList.length).fill(0) //Create an placeholder array of 0 (representing no edge)
  );
  for (const [i, nodeInfo] of Array.from(nodeList.entries())) {
    const originId = indexToId.get(i) || 0;
    const connectedNodes = adjacencyDict.get(originId) || new Set([]);
    for (const targetNodeID of Array.from(connectedNodes)) {
      const targetNode = nodeList[idToIndex.get(targetNodeID) || 0];
      const targetNodeIndex = idToIndex.get(targetNodeID) || 0;
      const length =
        Math.sqrt(
          (nodeInfo[0] - targetNode[0]) ** 2 +
            (nodeInfo[1] - targetNode[1]) ** 2
        ) / systemProperties.pixelToMeterRatio;
      adjacencyMatrix[i][targetNodeIndex] = length;
      stiffnessMatrix[i][targetNodeIndex] =
        ((1 / 4) *
          systemProperties.linkCrossSectionalArea *
          systemProperties.youngsModulus) /
        length; //The usual formula does not have 1/4. This is a  factor for the undirected graph and the 1/2 term in the elastic potential energy term to reduce division during optimization
      massList[i] +=
        ((length / 2) * systemProperties.linearDensity) /
        systemProperties.pixelToMeterRatio; // We only need to add to the origin nodes as the undirected graph will account for the other direction.
    }
  }

  // console.log(nodeList);
  // console.log(adjacencyMatrix);
  // console.log(massList);
  // console.log(stiffnessMatrix);
  // console.log(fixedNodesIndicies);

  //Objective function is the total system energy. Minimizing this will lead to the deformed shape of the structure
  const evaluateSystemEnergy = (x: number[]) => {
    let systemEnergy = 0;
    const yOffset = x.length / 2;

    //Gravitational Potential Energy Summation for each node. DE = mg(h-href)
    for (let i = 0; i < nodeList.length; i++) {
      systemEnergy +=
        (massList[i] *
          systemProperties.gravitationAcceleration *
          (systemProperties.groundReference - x[i + yOffset])) /
        systemProperties.pixelToMeterRatio;
    }

    //Elastic Energy Summation for each edge. DE = 1/2 * 1/2 k (l-lref)^2 = 1/4 kE/lref(l-lref)^2. 1/4 factor is baked into the k term in this implementation.
    for (let i = 0; i < nodeList.length; i++) {
      for (let j = 0; j < nodeList.length; j++) {
        const length =
          Math.sqrt(
            (x[i] - x[j]) ** 2 + (x[i + yOffset] - x[j + yOffset]) ** 2
          ) / systemProperties.pixelToMeterRatio;
        systemEnergy +=
          stiffnessMatrix[i][j] * (length - adjacencyMatrix[i][j]) ** 2;
      }
    }

    //A differentiable bound for the vertical position is need to create a ground plane. We can use a one-side quadratic term which creates this ground plane. The absolute value of a linear term relative to the original x location is used to represent a friction term and prevent the system for sliding realtive to the ground plane as the system is horizontally translationally invariant
    for (let i = 0; i < nodeList.length; i++) {
      if (x[i + yOffset] > systemProperties.groundReference) {
        systemEnergy +=
          systemProperties.groundStiffnessFactor *
          ((systemProperties.groundReference - x[i + yOffset]) /
            systemProperties.pixelToMeterRatio) **
            2;
        systemEnergy +=
          (systemProperties.groundFrictionalFactor *
            Math.abs(nodeList[i][0] - x[i])) /
          systemProperties.pixelToMeterRatio;
      }
    }
    // console.log(systemEnergy);
    return systemEnergy;
  };

  // const x: number[] = [];
  // for (const ele of nodeList) x.push(ele[0]);
  // for (const ele of nodeList) x.push(ele[1]);
  // console.log(evaluateSystemEnergy(x));

  const { solution, iter } = powellOptimization(
    evaluateSystemEnergy,
    nodeList,
    fixedNodesIndicies,
    10000
  );
  // console.log(systemProperties.groundReference);
  // console.log(nodeList);
  // console.log(solution);
  // console.log(fx);
  console.log(iter);
  // console.log(isConverged);

  //Adapt solution back into dictionary form
  for (let i = 0; i < solution.length; ++i) {
    const nodeID = indexToId.get(i) || 0;
    const node = nodeDict.get(nodeID);
    if (!node) continue;
    node.x = solution[i][0];
    node.y = solution[i][1];
  }

  //Calculate the stress and store the max stress.
  let maxStress = 0;
  const stressDict: Map<number, Map<number, number>> = new Map();
  for (const nodeID of Array.from(nodeDict.keys()))
    stressDict.set(nodeID, new Map()); //Preload the entreis with empty maps

  for (let i = 0; i < solution.length; ++i) {
    for (let j = 0; j < solution.length; ++j) {
      if (!adjacencyMatrix[i][j]) continue;

      const newLength =
        Math.sqrt(
          (solution[i][0] - solution[j][0]) ** 2 +
            (solution[i][1] - solution[j][1]) ** 2
        ) / systemProperties.pixelToMeterRatio;

      const stress = Math.abs(
        ((newLength - adjacencyMatrix[i][j]) / adjacencyMatrix[i][j]) *
          systemProperties.youngsModulus
      );

      maxStress = Math.max(stress, maxStress);
      const nodeID1 = indexToId.get(i) || 0;
      const nodeID2 = indexToId.get(j) || 0;
      stressDict.get(nodeID1)?.set(nodeID2, stress);
    }
  }
  return { newNodeDict: nodeDict, stressDict, maxStress };
}

//Zeroth Order Powell Optimization. For the number of nodes expected, it would be far more efficient to use something like BFGS although the implementation is more difficult and excessive for a simple project like this.
const powellOptimization = (
  func: Function,
  x0: number[][],
  exclusion = new Set<Number>([]),
  maxIter = 1000
) => {
  const eps = 1e-2; //Convergence Threshold
  let alpha = 0.00005; //Scaling Rate (Dynamic)
  let isConverged = false; //Convergence Flag

  const x: number[] = [];
  for (const ele of x0) x.push(ele[0]);
  for (const ele of x0) x.push(ele[1]);

  let pfx = Math.exp(10);
  let fx = func(x);

  let iter = 0; //Number of iterative steps
  //Iterative Optimizaiton Loop
  while (!isConverged && iter < maxIter) {
    const indicies = randomIndicies(x); //Obtain random indicies to update the variables in random order
    isConverged = true;
    for (let i = 0; i < indicies.length; i++) {
      if (exclusion.has(indicies[i])) continue; //Skip the iteration of constant  (fixed nodes)
      if (exclusion.has(indicies[i] - indicies.length / 2)) continue; //Skip the iteration of constant  (fixed nodes)

      //Numerical Forwards Partial Gradient
      x[indicies[i]] += 1e-6;
      let fxi = func(x);
      x[indicies[i]] -= 1e-6;
      let dx = (fxi - fx) / 1e-6;
      if (Math.abs(dx) > eps) isConverged = false; //Convergence Check

      x[indicies[i]] += -alpha * dx; //Update Step
      fx = func(x);
    }

    alpha = pfx > fx ? alpha * 1.1 : alpha * 0.7; // Scale the scaling rate dynamically
    pfx = fx;

    ++iter;
  }

  const solution: number[][] = [];
  for (let i = 0; i < x.length / 2; i++)
    solution.push([x[i], x[i + x.length / 2]]);

  return { solution, fx, iter, isConverged };
};

//Randomization of indicies to improve perfomance of 0th Powell Optimization
const randomIndicies = (array: number[]) => {
  const out: number[] = [];
  for (let i = 0; i < array.length; i++) out.push(i);
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * i);
    const temp = out[i];
    out[i] = out[j];
    out[j] = temp;
  }
  return out;
};

export { closestNode, solveStructure };
