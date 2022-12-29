import {
  Button,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, MouseEvent, useState } from "react";

import "./StructuralSolverApp.css";
import {
  closestNode,
  evaluateSystemEnergy,
  powellOptimization,
} from "./StructuralSolverCalculations";

type Node = {
  x: number;
  y: number;
  isFixed: boolean;
  id: number;
  mass: number;
};

export type { Node };

function StructuralSolverApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null); //Reference to Canvas
  const contextRef = useRef<CanvasRenderingContext2D | null>(null); //Reference to Canvas Context

  const [selectionMode, setSelectionMode] = useState<string | null>("build");
  const [selectedNode, setSelectedNode] = useState<Node | null>();
  const [nextID, setNextID] = useState(0);
  const [nodeDict, setNodeDict] = useState<Map<number, Node>>(new Map());
  const [adjacencyDict, setAdjacencyDict] = useState<Map<number, Set<number>>>(
    new Map()
  );

  //Use Effect intializes the canvas to the correct DPI
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth / 2}px`;
    canvas.style.height = `${window.innerHeight / 2}px`;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.scale(4, 4);
    contextRef.current = context;
  }, []);

  const handleModeSelection = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string | null
  ) => {
    setSelectionMode(newMode);
  };

  //Handles interactions to the canvas based on the user mode
  const nodeInteract = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    // console.log(nodeDict);
    const { clientX, clientY } = nativeEvent;
    if (!contextRef.current || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    switch (selectionMode) {
      case "delete": {
        const { closeNode, minDistance } = closestNode(
          x,
          y,
          Array.from(nodeDict.values())
        );

        if (minDistance < 15 && closeNode) {
          //Delete the from the dict and the adjacency dict
          setNodeDict((currNodeDict) => {
            const mep = new Map(currNodeDict);
            mep.delete(closeNode.id);
            redrawNodes(mep);
            return mep;
          });
          setAdjacencyDict((currAdjacencyDict) => {
            const mep = new Map(currAdjacencyDict);
            if (!currAdjacencyDict.has(closeNode.id)) return mep;

            //Prune all the inbound edges to the target deleted node
            const originNodes = currAdjacencyDict.get(closeNode.id);
            if (!originNodes) return mep;
            for (const originNode of Array.from(originNodes.keys())) {
              mep.get(originNode)?.delete(closeNode.id);
            }
            mep.delete(closeNode.id);
            redrawLinks(nodeDict, mep);
            return mep;
          });
        }

        return;
      }

      default: {
        //Select nodes when they are very close
        const { closeNode, minDistance } = closestNode(
          x,
          y,
          Array.from(nodeDict.values())
        );

        if (minDistance < 15 && closeNode) {
          if (nodeDict.size <= 1) return; //If there is only one node, end

          //If no node is selected
          if (!selectedNode) {
            //Select a node otherwise
            setSelectedNode(closeNode);
            contextRef.current.strokeStyle = "aqua";
            contextRef.current.lineWidth = 4;
            contextRef.current.strokeRect(
              closeNode.x - 8,
              closeNode.y - 8,
              16,
              16
            );
            return;
          }
          //If the closest node to click is the selected node, deselect the node and end
          if (selectedNode.id == closeNode.id) {
            setSelectedNode(null);
            contextRef.current.strokeStyle = "Black";
            contextRef.current.strokeRect(
              selectedNode.x - 8,
              selectedNode.y - 8,
              16,
              16
            );
            return;
          }

          //If there is already a selected node , we can form a link (ie. otherwise)
          contextRef.current.strokeStyle = "Black";
          contextRef.current.lineWidth = 4;
          contextRef.current.beginPath();
          contextRef.current.moveTo(selectedNode.x, selectedNode.y);
          contextRef.current.lineTo(closeNode.x, closeNode.y);
          contextRef.current.stroke();
          contextRef.current.strokeRect(
            selectedNode.x - 8,
            selectedNode.y - 8,
            16,
            16
          );
          //Add the nodes to the adjacency dict
          setAdjacencyDict((currAdjacencyDict) => {
            const mep = new Map(currAdjacencyDict);

            //Add edges to form a undirected graph. An directed graph could potentially be used to half the calculation time.
            const currSet1 = currAdjacencyDict.get(selectedNode.id);
            if (currSet1) mep.set(selectedNode.id, currSet1.add(closeNode.id));
            else mep.set(selectedNode.id, new Set([closeNode.id]));

            const currSet2 = currAdjacencyDict.get(closeNode.id);
            if (currSet2) mep.set(closeNode.id, currSet2.add(selectedNode.id));
            else mep.set(closeNode.id, new Set([selectedNode.id]));

            // console.log(mep);
            return mep;
          });

          setSelectedNode(null);
          return;
        }

        //Prevent new nodes from being made if a node is selected
        if (selectedNode) return;

        const newNode: Node = { x, y, isFixed: false, id: nextID, mass: 10 };
        setNodeDict(
          (currNodeDict) => new Map(currNodeDict.set(nextID, newNode))
        );
        setNextID((id) => id + 1);
        contextRef.current.fillStyle = "black";
        contextRef.current.fillRect(x - 10, y - 10, 20, 20);
      }
    }
  };

  //Redraws the current nodes
  const redrawNodes = (nodes: Map<number, Node>) => {
    if (!contextRef.current || !canvasRef.current) return;
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    for (const node of Array.from(nodes.values())) {
      contextRef.current.fillStyle = "black";
      contextRef.current.fillRect(node.x - 10, node.y - 10, 20, 20);
    }
  };
  //Redraws the current links
  const redrawLinks = (
    nodes: Map<number, Node>,
    adjacency: Map<number, Set<number>>
  ) => {
    if (!contextRef.current || !canvasRef.current) return;

    // For each link in the graph
    for (const nodeLinks of Array.from(adjacency.entries())) {
      const node1ID = nodeLinks[0];
      //We must check whether the node has been deleted
      const node1 = nodes.get(node1ID);
      if (!node1) continue;
      for (const node2ID of Array.from(nodeLinks[1].keys())) {
        const node2 = nodes.get(node2ID);
        if (!node2) continue;
        contextRef.current.strokeStyle = "Black";
        contextRef.current.lineWidth = 4;
        contextRef.current.beginPath();
        contextRef.current.moveTo(node1.x, node1.y);
        contextRef.current.lineTo(node2.x, node2.y);
        contextRef.current.stroke();
      }
    }
  };

  const handleSolve = () => {
    // const test = (arr: number[]) => 5 * arr[0] ** 2 + 2 + 3 * arr[0] ** 2;
    // const temp = powellOptimization(test, [[3, 3]], 1000);

    const nrg = evaluateSystemEnergy(nodeDict, adjacencyDict, adjacencyDict, {
      groundReference: (canvasRef.current?.height || 0) / 4,
    });
    console.log(nrg);
  };
  return (
    <Container maxWidth="xl">
      <section className="solver-app">
        <Typography>WHAT</Typography>
        <ToggleButtonGroup
          exclusive
          color="primary"
          value={selectionMode}
          onChange={handleModeSelection}
        >
          <ToggleButton value="build"> Build Mode </ToggleButton>
          <ToggleButton value="delete"> Delete Mode</ToggleButton>
        </ToggleButtonGroup>
        <canvas onMouseDown={nodeInteract} ref={canvasRef}></canvas>
        <Button variant="contained" onClick={handleSolve}>
          Solve It
        </Button>
      </section>
    </Container>
  );
}

export default StructuralSolverApp;
