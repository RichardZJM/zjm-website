import { Paper, Typography, Card, Box } from "@mui/material";
import { Container, display, maxWidth } from "@mui/system";
import React from "react";
import "./HanonSystems.css";

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
              solutions. I was under R&D HVAC Fluid Transport, developing HVAC
              lines for customers such as Ford, General Motors and Lucid.
            </Typography>
            <img
              className="hanon-image"
              src={require("../../../images/hanonSystemsLogo.jpg")}
            />
            <Typography
              variant="body1"
              color="primary"
              textAlign="left"
              maxWidth="50rem"
              marginTop="2rem"
            >
              Hanon, in last 3 years, has seen a significant shift in customer
              focus from internal combustion engines (ICE) to electric vehicles
              (EV) architecture. This required rapid adptation to new
              technologies and urgent development.
            </Typography>
          </div>

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
          </div>

          <div className="split-container contributions">
            <div className="charger-image-container">
              <img
                className="charger-image"
                src={require("../../../images/hanonSystems/charger.jpg")}
              />
              <Typography
                variant="h4"
                textAlign="center"
                color="#FFFFFF"
                sx={{
                  position: "absolute",
                  top: "40%",
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
                  GMC BT1XX: Electric Hummer HVAC Lines
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="#FFFFFF">
                  GM Brightdrop ELCV: EV600 HVAC Lines
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="#FFFFFF">
                  GM A100 Cruise: HVAC Lines
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="#FFFFFF">
                  Coordinate various departments including production operators,
                  maintenance, testing technologists, and prototype technicians
                </Typography>
              </li>
              <li></li>
            </ul>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default HanonSystems;
