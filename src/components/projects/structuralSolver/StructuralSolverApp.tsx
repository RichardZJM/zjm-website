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
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import React, { useEffect, useRef, MouseEvent, useState } from "react";

import "./StructuralSolverApp.css";
import { closestNode, solveStructure } from "./StructuralSolverCalculations";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import NodeCard from "./NodeCard";
import {
  deleteFromLocalStorage,
  loadPreset,
  loadUserSave,
  reloadUserSaves,
  saveToLocalStorage,
} from "./StructuralSolverIO";
import {
  leaningTowerDemo,
  triangleDemo,
  cantileverTrussDemo,
  suspensionBridgeDemo,
  RotationDemo,
} from "./StructuralSolverDemos";
import UserSaveCard from "./UserSaveCard";

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
  const nextSaveName = useRef<HTMLTextAreaElement>();

  // eslint-disable-next-line
  const [isCalculating, setIsCalculating] = useState(false); //May be used it a loading spinner in the future
  const [showingStress, setShowingStress] = useState(false);

  const presets = new Map([
    ["Triangle Demo", triangleDemo],
    ["Rotation Demo", RotationDemo],
    ["Leaning Tower Demo", leaningTowerDemo],
    ["Cantilever Truss Demo", cantileverTrussDemo],
    ["Suspension Bridge Demo", suspensionBridgeDemo],
  ]);
  const [userSaves, setUserSaves] = useState<string[]>([]);

  const [nodeMode, setNodeMode] = useState<string | null>("free");
  const [linkageMode, setLinkageMode] = useState<string | null>("round");
  const [selectionMode, setSelectionMode] = useState<string | null>("build");
  const [selectedNode, setSelectedNode] = useState<Node | null>();
  const [nextID, setNextID] = useState(1);
  const [nodeDict, setNodeDict] = useState<Map<number, Node>>(new Map()); //Should ideally be using a height balanaced BST for better performance although redraw operation is O(N)
  const [adjacencyDict, setAdjacencyDict] = useState<Map<number, Set<number>>>(
    new Map()
  );

  const youngsModulusRef = useRef<HTMLTextAreaElement>();
  const densityRef = useRef<HTMLTextAreaElement>();
  const gravitationAccelerationRef = useRef<HTMLTextAreaElement>();
  const innerWallDistanceRef = useRef<HTMLTextAreaElement>();
  const outerWallDistanceRef = useRef<HTMLTextAreaElement>();

  //Use Effect intializes the canvas to the correct DPI
  useEffect(() => {
    setUserSaves(reloadUserSaves());

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

  const handleLinkageModeSelection = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string | null
  ) => {
    setLinkageMode((currentMode) => newMode || currentMode);
  };

  const handleClearCanvas = () => {
    setNodeDict(new Map());
    setAdjacencyDict(new Map());
    redrawStructure(new Map(), new Map());
    setSelectedNode(null);
    setNextID(1);
  };
  //Load, Save, and Delete the user saves. The load and save functions are passes as props.
  const handleLoadStructure = (structureName: string) => {
    const out = loadUserSave(structureName);
    if (!out) {
      alert("Error! Save is corrupted or lost!");
      return;
    }
    let newNextID = 0;
    setNodeDict(out.nodeDict);
    for (const ID of Array.from(out.nodeDict.keys()))
      newNextID = Math.max(newNextID, ID);

    setNextID(newNextID + 1);
    setAdjacencyDict(() => {
      redrawStructure(out.nodeDict, out.adjacencyDict);
      return out.adjacencyDict;
    });
  };
  const handleLoadPreset = (structureJSON: string) => {
    const out = loadPreset(structureJSON);
    if (!out) {
      alert("Error! Save is corrupted or lost!");
      return;
    }
    let newNextID = 0;
    setNodeDict(out.nodeDict);
    for (const ID of Array.from(out.nodeDict.keys()))
      newNextID = Math.max(newNextID, ID);

    setNextID(newNextID + 1);
    setAdjacencyDict(() => {
      redrawStructure(out.nodeDict, out.adjacencyDict);
      return out.adjacencyDict;
    });
  };

  const handleSaveStructure = () => {
    if (!nextSaveName.current || !nextSaveName.current.value) return;
    saveToLocalStorage(
      nextSaveName.current.value.toUpperCase(),
      nodeDict,
      adjacencyDict
    );
    setUserSaves(reloadUserSaves());
  };
  const handleDeleteStructure = (structureName: string) => {
    deleteFromLocalStorage(structureName);
    setUserSaves(reloadUserSaves());
  };

  //Function to update a node in the node dict in the node card (Passed as Props to node card)
  const updateNode = (newNode: Node) => {
    setNodeDict((currNodeDict) => {
      const newDict = currNodeDict.set(newNode.id, newNode);
      redrawStructure(newDict, adjacencyDict);
      return newDict;
    });
  };
  //Handles interactions to the canvas based on the user mode
  const nodeInteract = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = nativeEvent;
    if (!contextRef.current || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    //Disable Stress Contour when updating a system
    if (showingStress) {
      redrawStructure(nodeDict, adjacencyDict);
      setShowingStress(false);
    }

    // setForceUpdate((curr) => !curr);

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
                redrawStructure(nodeMep, linkMep);
                return linkMep;
              }
              //Prune all the inbound edges to the target deleted node
              const originNodes = currAdjacencyDict.get(closeNode.id);
              if (!originNodes) return linkMep;

              for (const originNode of Array.from(originNodes.keys())) {
                linkMep.get(originNode)?.delete(closeNode.id);
              }
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
            //Select a node
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
          if (selectedNode.id === closeNode.id) {
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

        //If a node is selected but the user click far away from any node, deselct
        if (selectedNode) {
          redrawNode(selectedNode);
          setSelectedNode(null);
          return;
        }

        //Make a new Node otherwise
        const newNode: Node = { x, y, isFixed: false, id: nextID, mass: 0 };
        if (nodeMode === "fixed") newNode.isFixed = true;
        setNodeDict(
          (currNodeDict) => new Map(currNodeDict.set(nextID, newNode))
        );
        setNextID((id) => id + 1);

        contextRef.current.fillStyle = "grey";
        if (newNode.isFixed) contextRef.current.fillStyle = "black";
        contextRef.current.fillRect(x - 10, y - 10, 20, 20);
        contextRef.current.font = "20px Arial";
        contextRef.current.fillText(
          newNode.id.toString(),
          newNode.x + 10,
          newNode.y - 5
        );
      }
    }
  };
  //Redraws a particular node
  const redrawNode = (node: Node | undefined | null) => {
    if (!contextRef.current || !node) return;
    contextRef.current.fillStyle = "grey";
    if (node.isFixed === true) {
      contextRef.current.fillStyle = "black";
    }
    contextRef.current.fillRect(node.x - 10, node.y - 10, 20, 20);
    contextRef.current.font = "20px Arial";
    contextRef.current.fillText(node.id.toString(), node.x + 10, node.y - 5);
  };
  //Redraws the current links
  const redrawStructure = (
    nodes: Map<number, Node>,
    adjacency: Map<number, Set<number>>,
    stressDict?: Map<number, Map<number, number>>,
    maxStress?: number
  ) => {
    if (!contextRef.current || !canvasRef.current) return;

    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current?.height * 4,
      canvasRef.current?.width * 4
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

        //If stress values are available, colour code the links by stress and label the maximum stress
        if (maxStress) {
          contextRef.current.strokeStyle = interpolateColour(
            stressDict?.get(node1ID)?.get(node2ID) || 0,
            maxStress
          );
          if ((stressDict?.get(node1ID)?.get(node2ID) || 0) === maxStress) {
            contextRef.current.fillStyle = contextRef.current.strokeStyle;
            contextRef.current.fillText(
              "MX",
              (node1.x + node2.x) / 2,
              (node1.y + node2.y) / 2
            );
            contextRef.current.fillText(
              "MX: " + maxStress.toExponential(2) + " Pa",
              10,
              30
            );
          }
        }
        contextRef.current.lineWidth = 4;
        contextRef.current.beginPath();
        contextRef.current.moveTo(node1.x, node1.y);
        contextRef.current.lineTo(node2.x, node2.y);
        contextRef.current.stroke();
        redrawNode(node1);
        redrawNode(node2);
      }
    }
    //Redraw the selected node border
    if (!selectedNode || !selectedNode.id) return;
    const updatedSelectedNode = nodes.get(selectedNode.id);
    setSelectedNode(updatedSelectedNode);
    if (!updatedSelectedNode) return;

    contextRef.current.strokeStyle = "aqua";
    contextRef.current.lineWidth = 4;
    contextRef.current.strokeRect(
      updatedSelectedNode.x - 8,
      updatedSelectedNode.y - 8,
      16,
      16
    );
  };
  // Interpolates the colours for the stress visualization
  const interpolateColour = (stress: number, maxStress: number) => {
    const hue = (stress / maxStress) * -160 + 160;
    return "hsl(" + hue + ",100%,50%)";
  };
  const handleSolve = () => {
    setIsCalculating(true);
    //Default linkage surface is a circle. A = pi * (Ro**2 - Ri**2)
    let linkCrossSectionalArea =
      (Math.PI *
        ((+(outerWallDistanceRef.current?.value || "0")) ** 2 -
          (+(innerWallDistanceRef.current?.value || "0")) ** 2)) /
      1000000; //Convert to m^2;

    if (linkCrossSectionalArea < 0)
      alert(
        "Warning: Outer wall of link cannot be smaller that the inner wall! System is unstable."
      );
    if ((youngsModulusRef.current?.value || 0) > 350)
      alert(
        "Warning: Young's Modulus is large. System may be numerically unstable."
      );

    if (linkageMode === "square")
      //If the square mode is active, convert to square. A = ((2Ro)**2 - (2Ri)**2) Conversion factor used instead of direct formula.
      linkCrossSectionalArea *= 4 / Math.PI;

    solveStructure(nodeDict, adjacencyDict, {
      youngsModulus: +(youngsModulusRef.current?.value || "0") * 1000000000, //Convert to Pa
      linkCrossSectionalArea: linkCrossSectionalArea,
      gravitationAcceleration: +(
        gravitationAccelerationRef.current?.value || "0"
      ), //Acceleration due to gravity (m/s^2)
      linearDensity:
        +(densityRef.current?.value || "0") * linkCrossSectionalArea, //Linear Density of Links   (kg/m)
      groundReference: (canvasRef.current?.height || 0) / 2.1, //Height of ground reference
      pixelToMeterRatio: 100,
      groundStiffnessFactor: 1000000,
      groundFrictionalFactor: 10,
    }).then(
      function (value) {
        const { newNodeDict, stressDict, maxStress } = value;
        redrawStructure(newNodeDict, adjacencyDict, stressDict, maxStress);
        setNodeDict(newNodeDict);
        setIsCalculating(false);
        setShowingStress(true);
      },
      function (error) {
        alert("Error!" + error);
        setIsCalculating(false);
      }
    );
  };

  return (
    <Container maxWidth="xl" sx={{ padding: "1rem 0rem" }}>
      <section className="solver-app">
        {/* <Typography sx={{ margin: "1rem" }} variant="h3">
          Pin-Jointed Structure Simulator
        </Typography> */}

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "40%", flexShrink: 0 }}>
              Tutorial and Info
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              How to build and solve structures
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}
          >
            <Typography variant="body2">
              This simulator is specifically designed for pin-jointed members.
              This means all linkages are attached to nodes and are free to
              rotate about the node. This means that for linkages to resist
              shearing and rotational motions, it is essential that truss-like
              structures are constructed.
            </Typography>
            <Typography variant="body2">
              The model construction begins with the build tools which are set
              to Build Mode and Free Nodes by default. Toggles allow the user to
              switch to Delete Mode and Fixed Nodes respectively. In build mode,
              clicking on the workspace places a node of the type selected by
              the toggle. Clicking on a node selects the node. Clicking on the
              blank canvas or the originating node deselects the nodes; clicking
              on a different node creates a link between two nodes. In Delete
              Mode, clicking on a node delete it and all the links associated
              with it.
            </Typography>
            <Typography variant="body2">
              Generally, Free nodes will make up the bulk of your model. The
              nodes are mobile and can be used to model deformation. Fixed Nodes
              are used as boundary conditions and represent immobile structures
              like walls or floors. Additionally, free nodes will be repelled by
              the ground level should the gravitational force bring them in
              contact. The simulation is not tuned to model free nodes without
              links and may experience numerical instability.
            </Typography>
            <Typography variant="body2">
              One must remember that there is no mass on free nodes by default.
              The Node Specifications tab is used to impart mass on the node of
              choice. Users can additionally specify the precise location of the
              node using Cartesian coordinates. For ease of finding the desired
              node, selecting the node in Build Mode will cause that node to
              appear at the front of the node specification listing.
            </Typography>
            <Typography variant="body2">
              The System Properties tab allows the user to modify the
              cross-sectional area of the linkages or the material used in the
              system. By default, the system is models thin-walled aluminum
              tubes. These properties generally respond well to mass within the
              range of 30-10000 kg. The user is free to modify the material
              although excessively large Young’s Modulus or large cross-sections
              may cause instability. Treat these settings with caution.
              Generally, values of less than 350GPa and less than 20mm work well
              although a more robust optimizer may be implemented in the future.
            </Typography>
            <Typography variant="body2">
              The user can save and load their models as needed using the
              presets and saves tab. Saving is done by providing a name to the
              model and hitting the save button. Presets and saves can be loaded
              by selecting from the list below. Saves are deleted similarly.
              Make sure to save before simulating a large system as you cannot
              current revert to the original system before simulation.
            </Typography>
            <Typography variant="body2">
              Finally, for complex structures like the suspension bridge preset,
              several minutes may be needed to produce a result. This is a
              browser-based physics simulation using energy minimization which
              isn’t particularly efficient. In complex cases and during
              catastrophic failure the system may reach the iteration cap and
              yield an unconverged result.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <canvas onMouseDown={nodeInteract} ref={canvasRef}></canvas>

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "40%", flexShrink: 0 }}>
              Build Tools
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Tools for constructing structures
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              gap: "1rem 3rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
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
            <Button
              variant="outlined"
              onClick={() => {
                handleClearCanvas();
              }}
            >
              {" "}
              Clear
            </Button>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "40%", flexShrink: 0 }}>
              System Properties
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Define the building blocks of the structure
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className="material-property-box">
              <Typography variant="body1">Physical Properties</Typography>
              <TextField
                type="number"
                variant="outlined"
                label="Young's Modulus"
                defaultValue="69"
                size="small"
                inputRef={youngsModulusRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">GPa</InputAdornment>
                  ),
                }}
              />
              <TextField
                type="number"
                variant="outlined"
                label="Density"
                defaultValue="2710"
                size="small"
                inputRef={densityRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      kg/m<sup>3</sup>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type="number"
                variant="outlined"
                label="Gravitational Acceleration"
                defaultValue="9.81"
                size="small"
                inputRef={gravitationAccelerationRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      m/s<sup>2</sup>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="material-property-box">
              <Typography variant="body1">Linkage Cross-Section</Typography>
              <ToggleButtonGroup
                exclusive
                color="primary"
                value={linkageMode}
                onChange={handleLinkageModeSelection}
              >
                <ToggleButton size="small" value="round">
                  <TripOriginIcon />
                </ToggleButton>
                <ToggleButton size="small" value="square">
                  <CropSquareIcon />
                </ToggleButton>
              </ToggleButtonGroup>
              <TextField
                type="number"
                size="small"
                variant="outlined"
                label="Distance From Center to Inner Wall"
                defaultValue="5"
                inputRef={innerWallDistanceRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mm</InputAdornment>
                  ),
                }}
              />
              <TextField
                type="number"
                size="small"
                variant="outlined"
                label="Distance From Center to Outer Wall"
                defaultValue="8"
                inputRef={outerWallDistanceRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">mm</InputAdornment>
                  ),
                }}
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "40%", flexShrink: 0 }}>
              Node Specifications
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Data values for setting specific node masses and positions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="node-card-grid">
              {Array.from(nodeDict.entries())
                .sort((a, b) => {
                  if (a[0] === selectedNode?.id) return -300;
                  return a[0] - b[0];
                })
                .map((ele) => (
                  <NodeCard
                    node={ele[1]}
                    isSelected={ele[1].id === selectedNode?.id}
                    updateNode={updateNode}
                    key={ele[1].x.toString() + ele[1].y.toString()}
                    systemProperties={{
                      pixelToMeterRatio: 100,
                      groundReference: (canvasRef.current?.height || 0) / 2.1,
                    }}
                  />
                ))}
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "40%", flexShrink: 0 }}>
              Presets & Saves
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Save and load your own builds or pre-built demos
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div className="save-options-container">
              <TextField
                size="small"
                variant="outlined"
                label="New Save Name"
                sx={{ width: "20rem" }}
                inputRef={nextSaveName}
              />
              <Button
                onClick={() => {
                  handleSaveStructure();
                }}
              >
                SAVE
              </Button>
            </div>
            <div className="user-save-cards-grid">
              {Array.from(presets.entries()).map(([presetName, preset]) => (
                <UserSaveCard
                  structureName={presetName}
                  loadStructure={handleLoadPreset}
                  deleteStructure={handleDeleteStructure} // Cannot be actually called
                  key={presetName}
                  isPreset={true}
                  preset={preset}
                />
              ))}
              {userSaves.map((saveName) => (
                <UserSaveCard
                  structureName={saveName}
                  loadStructure={handleLoadStructure}
                  deleteStructure={handleDeleteStructure}
                  key={saveName}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "100%", padding: "0" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "40%", flexShrink: 0 }}>
              Simulate
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Equlibriated structure simulation
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Button variant="contained" onClick={handleSolve}>
              Simulate the System Under Gravity
            </Button>
          </AccordionDetails>
        </Accordion>
      </section>
    </Container>
  );
}

export default StructuralSolverApp;
