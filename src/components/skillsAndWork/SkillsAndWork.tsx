import { Typography, useTheme, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SkillCard from "./SkillCard";
import WorkCard from "./WorkCard";

import "./SkillsAndWork.css";

import python from "../../images/skills/python.jpg";
import cSharp from "../../images/skills/cSharp.jpg";
import cad from "../../images/skills/cad.jpeg";
import manufacturing from "../../images/skills/manufacturing.jpeg";

import communication from "../../images/skills/communication.jpg";
import time from "../../images/skills/time.jpg";
import problemSolving from "../../images/skills/problemSolving.jpg";
import adaptability from "../../images/skills/adaptability.jpg";

function Experience() {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <section className="experience-section">
          <div className="experience-grid">
            <div className="experience-type-wrapper top-wrapper">
              <Paper sx={{ padding: "1rem", marginBottom: "1rem" }}>
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Experience
                </Typography>
              </Paper>
              <div className="experience-container">
                <WorkCard
                  image={cSharp}
                  title="Queen's Baja Sae"
                  location="2021 - 2034"
                  description="Java and C# experience building applications. Usage of common tools like collections, streams, and applied object oriented programming. Unity."
                  color={theme.palette.primary.main}
                />
                <WorkCard
                  image={cad}
                  title="Teaching Assistant"
                  location="2021 - 2034"
                  description="Usage of CAD software, SolidWorks, for design and analysis. Experience from design teams and coursework."
                  color={theme.palette.primary.main}
                />
                <WorkCard
                  image={manufacturing}
                  title="Lead Lab Teaching Assistant"
                  employer="Engineering Graphics"
                  location="Fall 23', 24'"
                  description="Experience with common manufacturing methods such as milling, drilling, tube bending, crimping, brazing."
                  color={"#FFFFFF"}
                />
                <WorkCard
                  image={cad}
                  title="Product Engineering Intern"
                  employer="Hanon Systems Canada"
                  location="05/21' – 06/22'"
                  link="/experience/hanon-systems"
                  description="”Best engineering intern in the history of Hanon Belleville” - Former Manager (From Available Ref. Ltr.). Developed and organized the builds of fluid transport prototypes for automotive thermal solutions and HVAC. Work included projects for electric vehicles from Ford, GM, and Lucid. Completed 342 prototype build requests under historically high demand. Click the title to read more. 
                  "
                  color={theme.palette.background.paper}
                />
              </div>
            </div>

            <div className="experience-type-wrapper">
              <Paper sx={{ padding: "1rem", marginBottom: "1rem" }}>
                <Typography
                  variant="h3"
                  color="secondary"
                  sx={{
                    fontWeight: "300",
                    textAlign: "center",
                  }}
                >
                  Skills
                </Typography>
              </Paper>
              <div className="experience-container">
                <SkillCard
                  image={communication}
                  title="Communication"
                  description="Thorough, concise. Comfortable with both written and verbal presentations for technical and non-technical subjects."
                  color={theme.palette.secondary.main}
                />
                <SkillCard
                  image={time}
                  title="Time Management"
                  description="Strong at balancing priorites and scheduling work. Completes task ahead of time; clockwork punctuality."
                  color={theme.palette.secondary.main}
                />
                <SkillCard
                  image={adaptability}
                  title="Adaptability"
                  description="Quick at learning new skills. Works well with new people and unfamilliar enviroments."
                  color={theme.palette.secondary.main}
                />
                <SkillCard
                  image={problemSolving}
                  title="Problem Solving"
                  description="A critical and objective thinker. Approaches problems methodically, breaking down, simplifying, and applying existing knowledge."
                  color={theme.palette.secondary.main}
                />
              </div>
            </div>

            <div className="experience-type-wrapper">
              <Paper sx={{ padding: "1rem", marginBottom: "1rem" }}>
                <Typography
                  variant="h3"
                  color="secondary"
                  sx={{
                    fontWeight: "300",
                    textAlign: "center",
                  }}
                >
                  Awards
                </Typography>
              </Paper>
              <div className="experience-container">
                <SkillCard
                  image={communication}
                  title="Communication"
                  description="Thorough, concise. Comfortable with both written and verbal presentations for technical and non-technical subjects."
                  color={theme.palette.secondary.main}
                />
                <SkillCard
                  image={time}
                  title="Time Management"
                  description="Strong at balancing priorites and scheduling work. Completes task ahead of time; clockwork punctuality."
                  color={theme.palette.secondary.main}
                />
                <SkillCard
                  image={adaptability}
                  title="Adaptability"
                  description="Quick at learning new skills. Works well with new people and unfamilliar enviroments."
                  color={theme.palette.secondary.main}
                />
                <SkillCard
                  image={problemSolving}
                  title="Problem Solving"
                  description="A critical and objective thinker. Approaches problems methodically, breaking down, simplifying, and applying existing knowledge."
                  color={theme.palette.secondary.main}
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Experience;
