import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./HanonSystems.css";
import Quotation from "./Quotation";

function HanonSystems() {
  return (
    <>
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
          >
            Hanon Systems Canada Inc.
          </Typography>
          <Typography variant="h4" color="secondary" textAlign="center">
            May 2021 — June 2022
          </Typography>
          <div className="job-description-container">
            <Typography
              variant="h6"
              marginTop="1rem"
              maxWidth="30rem"
              paddingLeft="1rem"
              color="secondary"
            >
              Hanon Systems is a global maufacturer of automotive thermal
              solutions. I was under R&D HVAC Fluid Transport, developing
              prototype HVAC lines for customers such as Ford, General Motors
              and Lucid.
            </Typography>
            <img
              className="hanon-image"
              src={require("../../../images/hanonSystemsLogo.jpg")}
              alt=""
            />
          </div>{" "}
          <Paper sx={{ padding: "1rem", marginTop: "1rem" }}>
            <Typography
              variant="body1"
              textAlign="left"
              maxWidth="60rem"
              margin="0rem 2rem 0rem 2rem"
              color="primary"
              sx={{ fontWeight: "500" }}
            >
              Hanon, in last 3 years, has seen a significant shift in customer
              focus from internal combustion engines (ICE) to electric vehicles
              (EV) architecture. This required rapid adptation to new
              technologies and urgent development, including expedited client
              and prototyping timelines and familiarization with new techniques.
              Under historically high workloads, I completed 342 prototype
              requirements of varying complexity over my year at Hanon.
            </Typography>
          </Paper>
          <div className="split-container">
            <Typography variant="h4" textAlign="center" color="primary">
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
                  Communicate technical, logicstical, and schenduling details
                  both internally and with client engineering teams
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
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "500",
                }}
              >
                Collaboration & Communication
              </Typography>
            </div>
            <ul className="collaboration-list">
              <Typography variant="h5">
                A role emphasising <em> multidisiplinary communication</em>
              </Typography>
              <li>
                <Typography variant="body1">
                  GMC BT1XX: Electric Hummer Underhood Lines
                </Typography>
              </li>
            </ul>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default HanonSystems;
