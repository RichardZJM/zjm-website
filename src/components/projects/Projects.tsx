import { Container } from "@mui/system";
import React from "react";
import ProjectsCard from "./ProjectCard";
import "./Projects.css";

// import mech323 from "../../images/projects/mech323.jpg";
// import apsc200 from "../../images/projects/apsc200.jpg";
import gearRatioSimBG from "../../images/projects/car.jpg";
import lttpBG from "../../images/projects/lttp.jpg";
import structuralSimBG from "../../images/projects/structural.jpg";
import apdlBG from "../../images/projects/apdltools.png";
import sameCFDBG from "../../images/projects/same.png";
import mdTrainingBG from "../../images/projects/mtp.jpg";
import smallCellBG from "../../images/projects/smallcell.png";
import websiteBG from "../../images/projects/website.jpg";
import mtpGPU from "../../images/projects/mtpgpu.png";

function Projects() {
  return (
    <Container maxWidth="xl">
      <section className="projects-container">
        <ProjectsCard
          title="Research Paper: Small Cells, Big Speedups"
          subtitle="Fast Active Learning of Machine Learning Interatomic Potentials"
          image={smallCellBG}
          chips={[
            "Published",
            "Machine Learning",
            "Active Learning",
            "High-Performance Computing",
            "Molecular Dynamics",
          ]}
          description={`Published in Computational Materials Science. Machine learning interatomic potentials (MLIPs) often use on-the-fly active learning, adding configurations from simulated trajectories, but large-cell ab initio calculations are costly. We developed a small-cell training protocol for MLIPs that preserves quality while cutting computational costs. Our approach shows that training with smaller systems (1 to 16 atoms) achieves similar accuracy. In a potassium case study, we applied active learning with 2-atom models, incrementally adding atoms and reducing costs by up to two orders of magnitude compared to 54-atom cells. Static and thermodynamic properties matched large-cell results, capturing essential data for modeling large-scale phenomena. We benchmarked protocol variations and provided recommendations.`}
          // explore={"https://youtu.be/Nsgq0Kj2ymU"}
          githubLink="https://github.com/RichardZJM/Small-Cell-MTP-training"
        />

        <ProjectsCard
          title="MTP GPU"
          subtitle="GPU Acceleration for Machine Learning Interatomic Potentials"
          image={mtpGPU}
          chips={[
            "Machine Learning",
            "GPU Acceleration",
            "Molecular Dynamics",
            "High-Performance Computing",
            "Kokkos / CUDA",
          ]}
          description={`GPU acceleration for the popular Moment Tensor Potential within the LAMMPS Molecular Dynamics simulation engine. In addition to the GPU acceleration, there are further CPU optimizations that build upon previous works, yielding speedups of up to two times.`}
          githubLink="https://github.com/RichardZJM/lammps-mtp"
        />

        <ProjectsCard
          title="FEM Pin-Jointed Structure Simulator"
          subtitle="Finite Element Simulation of User-Defined Structures Under Gravitational Load"
          image={structuralSimBG}
          chips={[
            "React",
            "Finite Element",
            "Energy Minimization",
            "Structural Analysis",
            "Graph Theory",
            "Numerical Optimization",
          ]}
          description={`An FEM simulation tool/game that calculates the stress and deformation of a pin-jointed structure under load. Users can use the interactive GUI to graphically plot free and fixed nodes. Links are defined through the selection of nodes. The structure's material and link profile design can also be specified. The solution is then calculated through potential energy minimization and stresses are plotted by colour. Try it out and simulate classic structures like towers, bridges, and cantilevers! Prototyped in Python, built with React.`}
          githubLink="https://github.com/RichardZJM/zjm-website/tree/structural-solver/src/components/projects/structuralSolver"
          tryItOut="/projects/structural-solver"
        />

        <ProjectsCard
          title="Machine Learning Interatomic Potential Training"
          subtitle="Winner of Arkley Prize: ML Training of Potentials for Molecular Dynamics"
          image={mdTrainingBG}
          chips={[
            "Ongoing",
            "Python",
            "HPC Clusters",
            "Active Machine Learning",
            "Molecular Dynamics",
            "DFT",
          ]}
          description={`Winner of Arkley Prize for best Mech Eng. Undergraduate Research Project supported by oral presentation. Molecular dynamics simulations depend on interatomic potentials to describe the movement of atoms as classical particles. Quantum chemistry techniques like Density Functional Theory provide an accurate but infeasibly expensive solution. Machine learning potentials can provide practical prediction models through training on quantum mechanical datasets. As part of the Queen's Nuclear Group, datasets are generated and processed on Compute Canada HPC clusters. Subsequent active and passive training of an MTP model is used to generate a potassium metal model which is validated against DFT results and physical property prediction.`}
          githubLink="https://github.com/RichardZJM/K-MTP-training"
        />

        <ProjectsCard
          title="SAM-e Fluid Modelling"
          subtitle="PEO Engineering Competition 3rd Place: CFD Simulation of Steam Manifold."
          image={sameCFDBG}
          chips={[
            "Python",
            "OpenFOAM",
            "Fluid Mechanics",
            "Model Tuning and Optimization",
          ]}
          description={
            "The SAM-e is a steam distribution manifold manufactured by Condair Inc. As an undergraduate engineering capstone, a representative model is being created to help Condair experiment with model-driven design and develop the next generation of products. With a group of five students, an OpenFoam computational fluid dynamics model is being developed. Experimental data provided by Condair will be used to validate the model, on top of which the team will create a user interface to increase usability for Condair engineering teams."
          }
          explore={"https://youtu.be/Nsgq0Kj2ymU"}
        />
        <ProjectsCard
          title="Listen To the Path"
          subtitle="Hackathon Winner: Game Playable by Audio Only"
          image={lttpBG}
          chips={[
            "C#",
            "Unity",
            "Hackathon",
            "Procedural Maze",
            "Audio Design",
          ]}
          description={`A game designed with accessible features, particularly with the visually impaired in mind. Players navigate a procedurally generated maze using sound cues to ascertain the obejctive, thier location, and the local obstacles. Developed during a Hackathon, it required rapid learning of new technologies, determination, and teamwork. Winner of "Best Overall Hack" and "Best Game", CuHacking 2021 (200 participants). `}
          githubLink="https://github.com/Rajykins/ListenToThePath"
          explore="https://youtu.be/riZb6pExfhQ"
        />
        <ProjectsCard
          title="APDL SOLID185 Tool"
          subtitle="An ANSYS Tool for Automating the Generation of Area and Volume Commands in SOLID185 Elements"
          image={apdlBG}
          chips={[
            "TypeScript",
            "Python",
            "Loop Finding",
            "Graph Theory",
            "User Input Parsing",
          ]}
          description={`APDL is a command set used in the popular structural analysis software ANSYS. SOLID185 mapped meshing in APDL requires the manual user definition of keypoints, lines, areas, and volumes. The latter two can generally be derived from the first two, with the exception of niche ambigious cases. This online tool expedites the mapped meshing process by generating area and volume commands utilizing the graph given by the user-defined keypoints and lines (i.e. vertices and edges). Resulted in personal time saving of several hours. Tool was distributed amongst class of several dozen students to same more manhours.`}
          githubLink="https://github.com/RichardZJM/apdl_tools"
          tryItOut="https://apdl-tools.netlify.app/"
        />
        <ProjectsCard
          title="Gear Ratio Optimizer"
          subtitle="Simulation and Optimization of a RC vehicle gear ratio "
          image={gearRatioSimBG}
          chips={["SciPy", "Python", "Numerical Maximization", "ODE Solving"]}
          description="Numerical solutions from first principles force balance on an RC vehicle driven with a DC motor. Optimization of solutions to estimate the optimal gear ratio for speed under specific competition criteria. "
          githubLink="https://github.com/RichardZJM/gear-ratio-optimizer"
        />
        <ProjectsCard
          title="Personal Website"
          subtitle="React-Based E-Portfolio"
          image={websiteBG}
          chips={["React", "CSS", "HTML", "TypeScript", "MUI"]}
          description="See the code behind this website. Built with React using a mixture of custom components and MUI elements. React Router for navigation."
          githubLink="https://github.com/RichardZJM/zjm-website"
          tryItOut="https://www.richardzjm.com/home"
        />
        {/* <ProjectsCard
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
        /> */}
      </section>
    </Container>
  );
}

export default Projects;
