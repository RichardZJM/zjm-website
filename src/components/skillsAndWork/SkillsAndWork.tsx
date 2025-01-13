import { Typography, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SkillCard from "./SkillCard";
import WorkCard from "./WorkCard";

import "./SkillsAndWork.css";

import hanon from "../../images/experience/hanonSystems.jpg";
import snow from "../../images/experience/snow.jpg";
import cad from "../../images/experience/cad.jpg";
import automatic from "../../images/experience/automatic.jpeg";

import python from "../../images/experience/python.jpg";
import cSharp from "../../images/experience/cSharp.jpg";
import atoms from "../../images/experience/atoms.jpg";
import webstuff from "../../images/experience/webstuff.jpg";
import hpc from "../../images/experience/server.jpg";
import code from "../../images/experience/code.jpg";

import innovation from "../../images/experience/innovation.jpg";
import thermodynamics from "../../images/experience/thermodynamics.jpg";
import presentation from "../../images/experience/presentation.jpg";
import other from "../../images/experience/other.jpg";
// import books from "../../images/experience/books.jpg";
import papers from "../../images/experience/papers.jpg";
import unene from "../../images/experience/unene.jpg";

function Experience() {
  return (
    <>
      <Container maxWidth={false} disableGutters>
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
                  description="Communicating with students, marking, and proctoring. Content included control theory, laplace transform, MATLAB, and controllers. "
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
                  color={"#f0ead3"}
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
                  image={webstuff}
                  title="Front End Web"
                  description="Typscript, Javascript, CSS, HTML. Libraries such as React and MUI."
                  color={"#73a7bf"}
                />
                <SkillCard
                  image={cSharp}
                  title="C#"
                  description="C#. General usage and experience with Unity for game development."
                  color={"#83b3c7"}
                />
                <SkillCard
                  image={atoms}
                  title="Atomistic Simulations"
                  description="Running and performing scientific predictions using atomistic simulations. Molecular dynamics and density functional theory; LAMMPS, DFT, and machine learning potential models."
                  color={"#9dc2cf"}
                />
                <SkillCard
                  image={hpc}
                  title="HPC Usage"
                  description="Running and utilizing software, for primarily scientific purposes, on high performance computing cluster. Slurm, scripting, operating OpenMPI, OpenMP, and Cuda applications."
                  color={"#b6d4d6"}
                />
                <SkillCard
                  image={code}
                  title="C++"
                  description="C++ for perfomant code and parallel implementation. Some experience with OpenMPI and Cuda."
                  color={"#d7ded1"}
                />
                <SkillCard
                  image={python}
                  title="Python"
                  description="Python. General usage, scripting, and engineering analysis. Scientific packages such as NumPy, SciPy, Tensorflow. PyTorch."
                  color={"#eae9e1"}
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
                  image={other}
                  title="More Awards"
                  description="Alexander Graham Bell CGS-M NSERC Scholarship • Lorne C Elder Scholarship • Lena MacNeil Scholarship • Dean's Scholar • Queen's General Bursary"
                  color={"#73a7bf"}
                />
                {/* <SkillCard
                  image={books}
                  title="CGS-M NSERC Scholarship"
                  description="Awarded to high-calibre scholars who are engaged in an eligible Master's program in Canada. (2024)"
                  color={"#83b3c7"}
                /> */}
                <SkillCard
                  image={papers}
                  title="R. Samuel McLaughlin Fellowship"
                  description="Awarded annually on the recommendation of a Department, Program, School or Faculty to eligible Master's or Doctoral students. (2023)"
                  color={"#83b3c7"}
                />
                <SkillCard
                  image={thermodynamics}
                  title="Conn-Gilbert Award"
                  description="Awarded to a Mechanical Engineering student, in the year in which the student graduates, who has the highest average on the core courses in Thermodynamics. (2023)"
                  color={"#9dc2cf"}
                />
                <SkillCard
                  image={innovation}
                  title="Colin T. Bayne Memorial Award"
                  description="Awarded to the graduating Mechanical Engineering student who, in the opinion of the Department, has shown most proficiency in innovative design. (2023)"
                  color={"#b6d4d6"}
                />
                <SkillCard
                  image={presentation}
                  title="L. M. Arkley Prize"
                  description="Awarded to a fourth year Mechanical Engineering student who submits the best paper, supported by an oral presentation. (2023)"
                  color={"#d7ded1"}
                />
                <SkillCard
                  image={unene}
                  title="UNENE 2024 Best Student Thesis"
                  description="Awarded to the student presenting the best 7-minute presentation of their research at the UNENE workshop. (2024)"
                  color={"#eae9e1"}
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
