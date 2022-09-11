import { Typography, useTheme, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SkillCard from "./SkillCard";

import "./Skills.css";

import python from "../../images/skills/python.jpg";
import cSharp from "../../images/skills/cSharp.jpg";
import cad from "../../images/skills/cad.jpeg";
import manufacturing from "../../images/skills/manufacturing.jpeg";

import communication from "../../images/skills/communication.jpg";
import time from "../../images/skills/time.jpg";
import problemSolving from "../../images/skills/problemSolving.jpg";
import adaptability from "../../images/skills/adaptability.jpg";

function Skills() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <section className="skills-section">
        {/* <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Skills
        </Typography> */}
        <div className="t-p-skill-grid">
          <div className="skill-type-wrapper">
            <Paper sx={{ padding: "1rem", marginBottom: "1rem" }}>
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  fontWeight: "300",
                  textAlign: "center",
                }}
              >
                Technical
              </Typography>
            </Paper>
            <div className="skills-container">
              <SkillCard
                image={cSharp}
                title="C# Java"
                description="Java and C# experience building applications. Usage of common tools like collections, streams, and applied object oriented programming. Unity."
                color={theme.palette.primary.main}
              />
              <SkillCard
                image={cad}
                title="CAD"
                description="Usage of CAD software, SolidWorks, for design and analysis. Experience from design teams and coursework."
                color={theme.palette.primary.main}
              />
              <SkillCard
                image={manufacturing}
                title="Manufacturing methods"
                description="Experience with common manufacturing methods such as milling, drilling, tube bending, crimping, brazing."
                color={theme.palette.primary.main}
              />
              <SkillCard
                image={python}
                title="Python"
                description="Python for data interpretation, engineering design, and simulation. Usage of packages like NumPy, Pandas, SciPy."
                color={theme.palette.primary.main}
              />
            </div>
          </div>

          <div className="skill-type-wrapper">
            <Paper sx={{ padding: "1rem", marginBottom: "1rem" }}>
              <Typography
                variant="h3"
                color="secondary"
                sx={{
                  fontWeight: "300",
                  textAlign: "center",
                }}
              >
                Professional
              </Typography>
            </Paper>
            <div className="skills-container">
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
  );
}

export default Skills;
