import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useRef, MouseEvent, useState } from "react";

import "./StructuralSolverApp.css";
import { closestNode, solveStructure } from "./StructuralSolverCalculations";

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

  const [nodeMode, setNodeMode] = useState<string | null>("free");
  const [selectionMode, setSelectionMode] = useState<string | null>("build");
  const [selectedNode, setSelectedNode] = useState<Node | null>();
  const [nextID, setNextID] = useState(0);
  const [nodeDict, setNodeDict] = useState<Map<number, Node>>(new Map()); //Should ideally be using a height balanaced BST for better performance although redraw operation is O(N)
  const [adjacencyDict, setAdjacencyDict] = useState<Map<number, Set<number>>>(
    new Map()
  );

  //Use Effect intializes the canvas to the correct DPI
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth * 2;
    canvas.height = 1200;
    canvas.style.width = `${canvas.width / 2.1}px`;
    canvas.style.height = `${canvas.height / 2.1}px`;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.scale(2.1, 2.1);
    contextRef.current = context;
  }, []);

  const handleModeSelection = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string | null
  ) => {
    setSelectionMode((currentMode) => newMode || currentMode);
    redrawNode(selectedNode);
    setSelectedNode(null);
  };

  const handleNodeModeSelection = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string | null
  ) => {
    setNodeMode((currentMode) => newMode || currentMode);
    redrawNode(selectedNode);
    setSelectedNode(null);
  };

  //Handles interactions to the canvas based on the user mode
  const nodeInteract = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
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
            const nodeMep = new Map(currNodeDict);
            nodeMep.delete(closeNode.id);
            setAdjacencyDict((currAdjacencyDict) => {
              const linkMep = new Map(currAdjacencyDict);

              if (!currAdjacencyDict.has(closeNode.id)) {
                return linkMep;
              }
              //Prune all the inbound edges to the target deleted node
              const originNodes = currAdjacencyDict.get(closeNode.id);
              if (!originNodes) return linkMep;

              for (const originNode of Array.from(originNodes.keys())) {
                linkMep.get(originNode)?.delete(closeNode.id);
              }
              console.log(linkMep);
              linkMep.delete(closeNode.id);

              redrawStructure(nodeMep, linkMep);
              return linkMep;
            });

            return nodeMep;
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
            redrawNode(selectedNode);
            setSelectedNode(null);
            return;
          }

          //If there is already a selected node , we can form a link (ie. otherwise)
          contextRef.current.strokeStyle = "Black";
          contextRef.current.lineWidth = 4;
          contextRef.current.beginPath();
          contextRef.current.moveTo(selectedNode.x, selectedNode.y);
          contextRef.current.lineTo(closeNode.x, closeNode.y);
          contextRef.current.stroke();
          redrawNode(selectedNode);
          redrawNode(closeNode);
          setSelectedNode(null);
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

            return mep;
          });
          return;
        }

        //Prevent new nodes from being made if a node is selected
        if (selectedNode) return;

        //Make a new Node otherwise
        const newNode: Node = { x, y, isFixed: false, id: nextID, mass: 10 };
        if (nodeMode == "fixed") newNode.isFixed = true;
        setNodeDict(
          (currNodeDict) => new Map(currNodeDict.set(nextID, newNode))
        );
        setNextID((id) => id + 1);

        contextRef.current.fillStyle = "grey";
        if (newNode.isFixed) contextRef.current.fillStyle = "black";
        contextRef.current.fillRect(x - 10, y - 10, 20, 20);
      }
    }
  };

  const redrawNode = (node: Node | undefined | null) => {
    if (!contextRef.current || !node) return;
    contextRef.current.fillStyle = "grey";
    if (node.isFixed == true) {
      contextRef.current.fillStyle = "black";
    }
    contextRef.current.fillRect(node.x - 10, node.y - 10, 20, 20);
  };
  //Redraws the current links
  const redrawStructure = (
    nodes: Map<number, Node>,
    adjacency: Map<number, Set<number>>
  ) => {
    if (!contextRef.current || !canvasRef.current) return;

    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current?.height,
      canvasRef.current?.width
    );

    //Draw each empty node
    for (const node of Array.from(nodes.values())) redrawNode(node);

    // For each link in the graph
    for (const nodeLinks of Array.from(adjacency.entries())) {
      const node1ID = nodeLinks[0];
      //We must check whether the node has been deleted
      const node1 = nodes.get(node1ID);
      if (!node1) continue;

      for (const node2ID of Array.from(nodeLinks[1].keys())) {
        const node2 = nodes.get(node2ID);
        if (!node2) continue;
        contextRef.current.strokeStyle = "black";
        contextRef.current.lineWidth = 4;
        contextRef.current.beginPath();
        contextRef.current.moveTo(node1.x, node1.y);
        contextRef.current.lineTo(node2.x, node2.y);
        contextRef.current.stroke();
        redrawNode(node1);
        redrawNode(node2);
      }
    }
  };

  const handleSolve = () => {
    console.log(nodeDict);
    const newDict = solveStructure(nodeDict, adjacencyDict, {
      youngsModulus: 69e9, //Example Stiffness of Links (Aluminum) (N/m)
      linkCrossSectionalArea: 0.00000005, //Example crossectional area
      gravitationAcceleration: 9.81, //Acceleration due to gravity (m/s^2)
      linearDensity: 10, //Linear Density of Links   (kg/m)
      groundReference: (canvasRef.current?.height || 0) / 2.1, //Height of ground reference
      pixelToMeterRatio: 100,
      groundStiffnessFactor: 10000,
      groundFrictionalFactor: 1,
    });
    console.log(newDict);
    setNodeDict((currNodeDict) => {
      redrawStructure(newDict, adjacencyDict);
      return newDict;
    });
  };
  return (
    <Container maxWidth="xl">
      <section className="solver-app">
        <Typography>WHAT</Typography>
        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Build Tools
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Tools for constructing structures
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex", gap: "3rem" }}>
            <ToggleButtonGroup
              exclusive
              color="primary"
              value={selectionMode}
              onChange={handleModeSelection}
            >
              <ToggleButton value="build"> Build Mode </ToggleButton>
              <ToggleButton value="delete"> Delete Mode</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              exclusive
              color="primary"
              value={nodeMode}
              onChange={handleNodeModeSelection}
            >
              <ToggleButton value="free"> Free Node </ToggleButton>
              <ToggleButton value="fixed"> Fixed Node</ToggleButton>
            </ToggleButtonGroup>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Material and Linkage Properties
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Define the building blocks of the structure
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", gap: "3rem" }}
          ></AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Node Specifications
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Data values for setting specific node masses and positions
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", gap: "3rem" }}
          ></AccordionDetails>
        </Accordion>

        <canvas onMouseDown={nodeInteract} ref={canvasRef}></canvas>
        <Button variant="contained" onClick={handleSolve}>
          Solve It
        </Button>
      </section>
    </Container>
  );
}

export default StructuralSolverApp;
