import { Container } from "@mui/system";
import React from "react";
import ProjectsCard from "./ProjectCard";
import "./Projects.css";

import mech323 from "../../images/projects/mech323.jpg";
import apsc200 from "../../images/projects/apsc200.jpg";
import car from "../../images/projects/car.jpg";

function Projects() {
  return (
    <Container maxWidth="xl">
      <section className="projects-container">
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
        <ProjectsCard
          title="Gear Ratio Optimizer"
          subtitle="Simulation and optimization of a RC vehicle for MECH323"
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
      </section>
    </Container>
  );
}

export default Projects;
