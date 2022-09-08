import { Chip, Paper, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import "./HanonSystems.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Quotation from "./Quotation";

function HanonSystems() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <Container disableGutters maxWidth={false}>
      <Container className="flex-coloumn-container">
        <Paper
          sx={{ padding: "1rem", width: "95%", maxWidth: "2500px" }}
          className="title-container"
        >
          <Typography variant="h2" maxWidth="20rem">
            Mechanical Engineering Intern
          </Typography>
          <img
            className="auto-image"
            src={require("../../../images/hanonSystems/automotive.jpeg")}
            alt=""
          />
        </Paper>
        <Typography
          variant="h3"
          color="primary"
          textAlign="center"
          marginTop="2rem"
          data-aos="fade-up"
        >
          Hanon Systems Canada Inc.
        </Typography>
        <Typography
          variant="h4"
          color="secondary"
          textAlign="center"
          data-aos="fade-up"
        >
          May 2021 — June 2022
        </Typography>
        <div className="job-description-container">
          <Typography
            variant="h6"
            marginTop="1rem"
            maxWidth="30rem"
            paddingLeft="1rem"
            color="secondary"
            data-aos="fade-right"
          >
            Hanon Systems is a global maufacturer of automotive thermal
            solutions. I was under R&D HVAC Fluid Transport, developing
            prototype HVAC lines for EVs by customers such as Ford, General
            Motors and Lucid, overseeing 342 prototype orders of varying
            complexity.
          </Typography>
          <img
            className="hanon-image"
            src={require("../../../images/hanonSystemsLogo.jpg")}
            alt="Hanon Systems'Logo"
            data-aos="fade-left"
          />
        </div>

        <div className="split-container">
          <Typography
            variant="h4"
            textAlign="center"
            color="primary"
            data-aos="flip-up"
          >
            Key Duties
          </Typography>
          <ul className="duties-list">
            <li>
              <Typography variant="body1">
                Apply thermodynamic and manufacturing concepts to build and
                ensure smooth operation of prototype fluid lines
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Arrange, schedule, plan, and report upcoming prototype builds
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Communicate technical, logicstical, and schenduling details both
                internally and with client engineering teams
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Testing and analysis of failing prototypes.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Coordinate various departments including production operators,
                maintenance, testing technologists, and prototype technicians
              </Typography>
            </li>
          </ul>
          <Quotation
            quotation={`"ZERO prototype promised due dates 
were missed and just as few customer complaints were received as a result of his discipline of planning ahead"`}
          />
          <Quotation
            quotation={`"Richard was able to perform these complex 
duties efficiently with detailed technical understanding of the components/final assemblies"`}
          />
        </div>
        <div className="split-container contributions">
          <div className="charger-image-container">
            <img
              className="charger-image"
              src={require("../../../images/hanonSystems/charger.jpg")}
              alt=""
            />
            <Typography
              variant="h4"
              textAlign="center"
              color="#FFFFFF"
              sx={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, 0)",
                fontWeight: "500",
              }}
            >
              Contributed Projects
            </Typography>
          </div>

          <ul className="contributions-list">
            <li>
              <Typography variant="body1" color="#FFFFFF">
                GMC BT1XX: Electric Hummer Underhood Lines
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="#FFFFFF">
                GM Brightdrop ELCV: EV600 Underhood Lines
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="#FFFFFF">
                GM A100 Cruise: Underhood Lines
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="#FFFFFF">
                Ford Explorer: Underbody Lines
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="#FFFFFF">
                Lucid Air: A/C Lines
              </Typography>
            </li>
            <li>
              <Typography variant="body1" color="#FFFFFF">
                Lucid Air: Heat Pump Lines
              </Typography>
            </li>
          </ul>
        </div>
        <div className="collaboration">
          <div className="collaboration-image-container">
            <img
              className="collaboration-image"
              src={require("../../../images/hanonSystems/collaboration.jpeg")}
              alt=""
            />
            <Typography
              variant="h4"
              textAlign="center"
              color="white"
              sx={{
                position: "absolute",
                left: "50%",
                top: "40%",
                transform: "translate(-50%, -50%)",
                fontWeight: "500",
              }}
            >
              Collaboration & Communication
            </Typography>
          </div>
          <ul className="collaboration-list">
            <Typography variant="h5" marginBottom="1rem">
              A role emphasising <em> multidisiplinary communication</em>
            </Typography>

            <li>
              <Typography variant="body2">CAD Teams</Typography>
            </li>
            <li>
              <Typography variant="body2">Manufacturing Engineering</Typography>
            </li>
            <li>
              <Typography variant="body2">Purchasing</Typography>
            </li>
            <li>
              <Typography variant="body2">Accounting</Typography>
            </li>
            <li>
              <Typography variant="body2">Logistics & Shipping</Typography>
            </li>
            <li>
              <Typography variant="body2">Quality</Typography>
            </li>
            <li>
              <Typography variant="body2">Production</Typography>
            </li>
            <li>
              <Typography variant="body2">Plant Management</Typography>
            </li>
          </ul>
        </div>

        <div className="spacer"></div>

        <section className="applied-skills-container">
          <Typography variant="h3" color="white" sx={{ fontWeight: "500" }}>
            Applied Skills
          </Typography>
          <div className="chip-container-contianer">
            <div className="chip-skills-container">
              <Chip label="Applied Thermodynamics" color="info" />
              <Chip label="Machine Design" color="info" />
              <Chip label="Manfacturing: Brazing" color="info" />
              <Chip label="Excel & VBA" color="info" />
              <Chip label="Root Cause Analysis" color="info" />
            </div>
            <div className="chip-skills-container">
              <Chip label="Project Management" color="success" />
              <Chip label="Organization and Planning" color="success" />
              <Chip label="Multidisciplinary Communication" color="success" />
              <Chip label="Report Writing" color="success" />
              <Chip label="Technical Presentation" color="success" />
              <Chip label="Task Delegation" color="success" />
            </div>
          </div>
        </section>
        <Quotation
          quotation={`"Richard showed technical comprehension, high professionalism and leadership qualities to easily earn 
the title of the best engineering intern in the history of Hanon Belleville"`}
        />
        <div className="reference-prompt-container">
          <Typography variant="body2">
            Quotes from Jason Ki-Sun Ryu, Manager Product Development
            Engineering. Read the full reference letter below.
          </Typography>
          <Button variant="contained" size="small">
            <Link
              to="/references/2022 Letter of Recommendation, MENG Richard.pdf"
              target="_blank"
              download
            >
              Reference Letter &#62;
            </Link>
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default HanonSystems;
