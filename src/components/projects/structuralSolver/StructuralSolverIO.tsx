import { Node } from "./StructuralSolverApp";

type structOBJ = {
  nodes: [number, Node][];
  adjacency: [number, number[]][];
};

function convertStructureToJSON(
  nodeDict: Map<number, Node>,
  adjacencyDict: Map<number, Set<number>>
) {
  const nodesOBJ = Array.from(nodeDict.entries());
  const adjacencyOBJ: [number, number[]][] = [];

  for (const nodeInfo of Array.from(adjacencyDict.entries())) {
    if (nodeInfo[1].size > 0)
      adjacencyOBJ.push([nodeInfo[0], Array.from(nodeInfo[1].keys())]);
  }

  const structureObject = {
    nodes: nodesOBJ,
    adjacency: adjacencyOBJ,
  };
  return JSON.stringify(structureObject);
}

function convertJSONToStructure(json: string) {
  const structureObject: structOBJ = JSON.parse(json);
  const nodeDict = new Map(structureObject.nodes);
  const adjacencyOBJ = structureObject.adjacency;
  const adjacencyDict: Map<number, Set<number>> = new Map();
  for (const nodeInfo of adjacencyOBJ) {
    adjacencyDict.set(nodeInfo[0], new Set(nodeInfo[1]));
  }
  return { nodeDict, adjacencyDict };
}

function saveToLocalStorage(
  structureName: string,
  nodeDict: Map<number, Node>,
  adjacencyDict: Map<number, Set<number>>
) {
  localStorage.setItem(
    structureName,
    convertStructureToJSON(nodeDict, adjacencyDict)
  );
  const currentRepository: string[] = JSON.parse(
    localStorage.getItem("repo") || "[]"
  );
  currentRepository.push(structureName);
  localStorage.setItem(
    "repo",
    JSON.stringify(Array.from(new Set(currentRepository).keys())) //Set to get rid of duplicates
  );
}

function deleteFromLocalStorage(structureName: string) {
  localStorage.removeItem(structureName);
  const currentRepository: string[] = JSON.parse(
    localStorage.getItem("repo") || "[]"
  );

  const repoSet = new Set(currentRepository);
  repoSet.delete(structureName);
  localStorage.setItem(
    "repo",
    JSON.stringify(Array.from(repoSet.keys())) //Set to get rid of duplicates
  );
}

function reloadUserSaves() {
  const currentRepository: string[] = JSON.parse(
    localStorage.getItem("repo") || "[]"
  );
  return currentRepository;
}

function loadUserSave(structureName: string) {
  const json = localStorage.getItem(structureName);
  if (!json) {
    alert("Error! Save is corrupted or lost!");
    return;
  }
  return convertJSONToStructure(json);
}

export {
  loadUserSave,
  saveToLocalStorage,
  reloadUserSaves,
  deleteFromLocalStorage,
};
