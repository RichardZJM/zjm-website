import { Typography, useTheme, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SkillCard from "./SkillCard";
import WorkCard from "./WorkCard";

import "./SkillsAndWork.css";

import python from "../../images/experience/python.jpg";
import hanon from "../../images/experience/hanonSystems.jpg";
import cSharp from "../../images/experience/cSharp.jpg";
import snow from "../../images/experience/snow.jpg";
import cad from "../../images/experience/cad.jpg";
import automatic from "../../images/experience/automatic.jpeg";
import manufacturing from "../../images/experience/manufacturing.jpeg";

import communication from "../../images/experience/communication.jpg";
import time from "../../images/experience/time.jpg";
import problemSolving from "../../images/experience/problemSolving.jpg";
import adaptability from "../../images/experience/adaptability.jpg";

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
                  image={snow}
                  title="Queen's Baja SAE"
                  employer="Queen's Baja SAE Design Team"
                  location="2019-2020"
                  description="Researched, designed, manufactured, and tested the anti-roll bar as part of the Queen's Baja SAE off-road vehicle design team. Usage ANSYS and SolidWorks; common machining operations such as milling and turning."
                  color={"#8ABACC"}
                />
                <WorkCard
                  image={automatic}
                  title="Teaching Assistant"
                  employer="Automatic Controls Course"
                  location="Winter 23'"
                  description="TA for grading and organization and "
                  color={"#B9D6D9"}
                />
                <WorkCard
                  image={cad}
                  title="Lead Lab Teaching Assistant"
                  employer="Engineering Graphics Course"
                  location="Fall 23', 24'"
                  description="Led and organized 2 other TAs in lab sessions containing 80 students.
                  Performed live demonstrations including technical drawing skills and CAD software using SolidWorks, presenting and explaining content. Supervision of students, mentorship of smaller groups, tutorials, and marking."
                  color={"#d9dad8"}
                />
                <WorkCard
                  image={hanon}
                  title="Product Engineering Intern"
                  employer="Hanon Systems Canada"
                  location="05/21' – 06/22'"
                  link="/experience/hanon-systems"
                  description="”Best engineering intern in the history of Hanon Belleville” - Former Manager (Click for Ref. Ltr.). Developed and organized the builds of fluid transport prototypes for automotive thermal solutions and HVAC. Work included projects for electric vehicles from Ford, GM, and Lucid. Completed 342 prototype build requests under historically high demand. Click to read more. 
                  "
                  color={"#f4eed2"}
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
