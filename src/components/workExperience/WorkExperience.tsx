import { Container } from "@mui/material";
import React from "react";

import "./WorkExperience.css";
import WorkExperienceCard from "./WorkExperienceCard";

function WorkExperience() {
  return (
    <>
      <Container maxWidth="xl">
        <WorkExperienceCard
          image={require("../../images/hanonSystemsLogo.jpg")}
          title="Product Engineering Intern"
          employer="Hanon Systems Canada Inc."
          dates="May 2021 — June 2022"
          description="R&D Fluid Transport. Development of Ford, GM, Lucid HVAC fluid line prototypes."
          link="/work-experience/hanon-systems"
          reference="/references/2022 Letter of Recommendation, MENG Richard.pdf"
        />
      </Container>
      <Container maxWidth="xl">
        <WorkExperienceCard
          image={require("../../images/hanonSystemsLogo.jpg")}
          title="Product Engineering Intern"
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
