import type { Node } from "./StructuralSolverApp";

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
  adjacencyDict: Map<number, Set<number>>
) => {};

export { closestNode };
