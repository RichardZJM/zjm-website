import { Container } from "@mui/system";
import React from "react";
import ProjectsCard from "./ProjectCard";
import "./Projects.css";

import mech323 from "../../images/projects/mech323.jpg";
import apsc200 from "../../images/projects/apsc200.jpg";
import car from "../../images/projects/car.jpg";
import lttp from "../../images/projects/lttp.jpg";
import structural from "../../images/projects/structural.jpg";
import apdl from "../../images/projects/apdltools.png";
import same from "../../images/projects/same.png";

function Projects() {
  return (
    <Container maxWidth="xl">
      <section className="projects-container">
        <ProjectsCard
          title="Pin-Jointed Structure Simulator"
          subtitle="Simulation of User-Defined Structures Under Gravitational Load"
          image={structural}
          chips={[
            "TypeScript",
            "Energy Minimization",
            "Structural Analysis",
            "Graph Theory",
            "Numerical Optimization",
          ]}
          description={`An simulation tool that calculates the stress and deformation of a pin-jointed structure under load. Users can use the interactive GUI to graphically plot free and fixed nodes. Links are defined through the selection of nodes. The structure's material and link profile design can also be specified. The solution is generated through potential energy minimization and stresses are plotted by colour. Try it out and simulate classic structures like towers, bridges, and cantilevers! `}
          githubLink="https://github.com/RichardZJM/zjm-website/tree/structural-solver/src/components/projects/structuralSolver"
          tryItOut="/projects/structural-solver"
        />
        <ProjectsCard
          title="SAM-e Fluid Modelling"
          subtitle="Capstone: Development of a GUI based CFD model with OpenFOAM Solvers for Condair Inc."
          image={same}
          chips={[
            "Python",
            "OpenFOAM",
            "Fluid Mechanics",
            "Model Tuning and Optimization",
          ]}
          description={"Hello"}
          explore={"https://youtu.be/Nsgq0Kj2ymU"}
        />
        <ProjectsCard
          title="Listen To the Path"
          subtitle="Hackathon Winner: Game Playable by Audio Only"
          image={lttp}
          chips={[
            "C#",
            "Unity",
            "Hackathon",
            "Procedural Maze",
            "Audio Design",
          ]}
          description={`A game designed with accessible features, particularly with the visually impaired in mind. Developed during a Hackathon, it required rapid learning of new technologies, determination, and teamwork. Winner of "Best Overall Hack" and "Best Game", CuHacking 2021`}
          githubLink="https://github.com/Rajykins/ListenToThePath"
          explore="https://youtu.be/riZb6pExfhQ"
        />
        <ProjectsCard
          title="APDL SOLID185 Tool"
          subtitle="An ANSYS Tool for Automating the Generation of Area and Volume Commands in SOLID185 Elements"
          image={apdl}
          chips={[
            "TypeScript",
            "Python",
            "Loop Finding",
            "Graph Theory",
            "User Input Parsing",
          ]}
          description={`APDL is a command set used in the popular structural analysis software ANSYS. SOLID185 mapped meshing in APDL requires the manual user definition of keypoints, lines, areas, and volumes. The latter two can generally be derived from the first two, with the exception of very niche ambigious cases. This online tool expedites the mapped meshing process by generating area and volume commands utilizing the graph given by the user-defined keypoints and lines (i.e. verticies and edges). Resulted in personal time saving of several hours. Tool was distributed amongst class of several dozen students to same more manhours.`}
          githubLink="https://github.com/RichardZJM/apdl_tools"
          tryItOut="https://apdl-tools.netlify.app/"
        />
        <ProjectsCard
          title="Gear Ratio Optimizer"
          subtitle="Simulation and Optimization of a RC vehicle gear ratio "
          image={car}
          chips={[
            "SciPy",
            "Python",
            "Numerial Maximization",
            "Numerial Methods for ODEs",
          ]}
          description="Numeric solutions from first principles force balance on an RC vehicle driven with a DC motor. Optimizaiton of solutions to estimate the optimal gear ratio for speed under specific competition criteria. "
          githubLink="https://github.com/RichardZJM/gear-ratio-optimizer"
        />
        <ProjectsCard
          title="Mech 323"
          subtitle="RC Car Gearbox and Housing"
          image={mech323}
          chips={[
            "Machine Design",
            "3D-Printing",
            "Gear Calculations",
            "SolidWorks",
          ]}
          description="A groupwork project which involved the design of a 3D-printed RC car gearbox. This required using theory and computational tools to determine design specificaitons. Machine design, gear calculations, and CAD were then used iteratively to generate a design."
          explore="/reports/Team23_Phase04_Report.pdf"
        />
        <ProjectsCard
          title="APSC 200 P2"
          subtitle="Launch Capsule Recovery System"
          image={apsc200}
          chips={[
            "Trajectory Modelling",
            "Iterative Design",
            "Altimeter Data Analysis",
          ]}
          description="Design of a launch recovery system for a capsule launch out of an air cannon. In a group, research various potential solutions and iteratively impove a parachute-based design. Additionally, the design had to be built with strict price consideration. "
          explore="/reports/P2FinalReport.Section203.Team16.pdf"
        />
      </section>
    </Container>
  );
}

export default Projects;
