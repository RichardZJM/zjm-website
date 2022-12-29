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

const solveStructure = (
  nodeDict: Map<number, Node>,
  adjacencyDict: Map<number, Set<number>>,
  systemProperties = {
    stiffness: 5000, //Example Stiffness of Links  (N/m)
    gravitationAcceleration: 9.81, //Acceleration due to gravity (m/s^2)
    linearDensity: 10, //Linear Density of Links   (kg/m)
    groundReference: 500, //Hieght of ground reference
    pixelToMeterRatio: 100,
  }
) => {
  //Convert Dictionary Representation to Matrix-based representations
  //Start by making the positional vectors for the nodes
  const nodeComboList = Array.from(nodeDict.entries());
  nodeComboList.sort((a, b) => a[0] - b[0]);
  const nodeList = nodeComboList.map((ele) => [ele[1].x, ele[1].y]); //Store the info in array of [xpos,ypos]
  //Mass matrix accounts for the mass of each node
  const massMatrix = nodeComboList.map((ele) => ele[1].mass);
  const variableNodesIndicies: number[] = []; //Used to determine which nodes are to be used in the optimization.
  for (let i = 0; i < nodeComboList.length; i++)
    if (nodeComboList![i][1].isFixed) variableNodesIndicies.push(i);

  const idToIndex = new Map(nodeComboList.map((ele, i) => [ele[0], i]));
  const indexToId = new Map(nodeComboList.map((ele, i) => [i, ele[0]]));

  //We will need to get the unstressed length of each link. This can double as the adjacency matrix
  // We can also ge the mass matrix which accounts for the weight of the links by distributing thier mass to the two connected nodes evenly
  const adjacencyMatrix: number[][] = [...Array(nodeList.length)].map(
    (ele) => Array(nodeList.length).fill(0) //Create an placeholder array of 0 (representing no edge)
  );
  for (const [i, nodeInfo] of Array.from(nodeList.entries())) {
    const originId = indexToId.get(i) || 0;
    const connectedNodes = adjacencyDict.get(originId) || new Set([]);
    for (const targetNodeID of Array.from(connectedNodes)) {
      const targetNode = nodeList[idToIndex.get(targetNodeID) || 0];
      const targetNodeIndex = idToIndex.get(targetNodeID) || 0;
      const length = Math.sqrt(
        (nodeInfo[0] - targetNode[0]) ** 2 + (nodeInfo[1] - targetNode[1]) ** 2
      );
      adjacencyMatrix[i][targetNodeIndex] = length;
      massMatrix[i] +=
        ((length / 2) * systemProperties.linearDensity) /
        systemProperties.pixelToMeterRatio; // We only need to add to the origin nodes as the undirected graph will account for the other direction.
    }
  }

  console.log(nodeList);
  console.log(adjacencyMatrix);
  console.log(massMatrix);
  //We need to calculate the mass attributed to each link and distribute it to the two connected nodes

  // const evaluateSystemEnergy = () => {
  //   let systemEnergy = 0;

  //   //Gravitational Potential Energy
  //   for (const nodeID of Array.from(nodeDict.keys())) {
  //     const node = nodeDict.get(nodeID);
  //     if (node)
  //       systemEnergy +=
  //         ((nodeDict.get(nodeID)?.mass || 0) *
  //           gravitationAcceleration *
  //           (groundReference - (nodeDict.get(nodeID)?.y || 0))) /
  //         pixelToMeterRatio;
  //   }

  //   //!!!!!!!!!!!!TODO!!!!!!!!!!! MAKE THE DISTANCE RELATIVE TO THE DEFAULT LENGTH
  //   //Elastic Energy
  //   for (const nodeLinks of Array.from(adjacencyDict.entries())) {
  //     const node1 = nodeDict.get(nodeLinks[0]);
  //     if (!node1 || !nodeLinks[1]) continue;
  //     for (const node2ID of Array.from(nodeLinks[1].keys())) {
  //       const node2 = nodeDict.get(node2ID);
  //       if (!node2) continue;
  //       systemEnergy +=
  //         ((1 / 4) *
  //           stiffness *
  //           Math.sqrt((node1.x - node2.x) ** 2 + (node1.y - node2.y) ** 2)) /
  //         pixelToMeterRatio;
  //     }
  //   }

  //   return systemEnergy;
  // };
};

//Zeroth Order Powell Optimization. For the number of nodes expected, it would be far more efficient to use something like BFGS although the implementation is more difficult and excessive for a simple project like this.
const powellOptimization = (func: Function, x0: number[][], maxIter = 1e2) => {
  const eps = 1e-2; //Convergence Threshold (Joules)
  let alpha = 0.001; //Scaling Rate (Dynamic)
  let isConverged = false; //Convergence Flag

  const x: number[] = [];
  for (const ele of x0) x.push(ele[0]);
  for (const ele of x0) x.push(ele[1]);

  let pfx = Math.exp(10);
  let fx = func(x);
  let pidx = 1;

  let iter = 0; //Number of iterative steps
  //Iterative Optimizaiton Loop
  while (!isConverged && iter < maxIter) {
    const indicies = randomIndicies(x); //Obtain random indicies to update the variables in random order

    for (let i = 0; i < indicies.length; i++) {
      isConverged = true;
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
