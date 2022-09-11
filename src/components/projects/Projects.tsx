import { Container } from "@mui/system";
import React from "react";
import ProjectsCard from "./ProjectCard";
import "./Projects.css";

import mech323 from "../../images/projects/mech323.jpg";

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
          description="A groupwork project which involved the design of a 3D-printed RC Car gearbox. This required using theory and computational tools to determine design specificaitons. Machine design, gear calculations, and CAD were then used iteratively to generate a design."
          explore="/reports/Team23_Phase04_Report.pdf"
        />
      </section>
    </Container>
  );
}

export default Projects;
