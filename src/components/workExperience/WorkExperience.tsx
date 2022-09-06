import { Box, Container, Paper, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import OptionsCard from "../OptionsCard";

import "./WorkExperience.css";
import WorkExperienceCard from "./WorkExperienceCard";

function WorkExperience() {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "600",
            color: theme.palette.secondary.main,
            fontStyle: "bold",
            textAlign: "center",
            margin: "3rem 0 3rem 0",
          }}
        >
          Work Experience
        </Typography>
        <WorkExperienceCard
          image={require("../../images/hanonSystemsLogo.jpg")}
          title="Mechanical Engineering Intern"
          employer="Hanon Systems Canada Inc."
          dates="May 2021 — June 2022"
          description="R&D Fluid Transport. Development of Ford, GM, Lucid HVAC fluid line prototypes."
          link="/work-experience/hanon-systems"
          reference="/references/2022 Letter of Recommendation, MENG Richard.pdf"
        />
      </Container>
    </>
  );
}

export default WorkExperience;
