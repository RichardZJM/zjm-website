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
            elevation={5}
            sx={{ padding: "1rem", width: "95%", maxWidth: "2500px" }}
            className="title-container"
          >
            <Typography variant="h2" maxWidth="20rem">
              Mechanical Engineering Intern
            </Typography>
            <img
              className="hanon-image"
              src={require("../../../images/hanonSystems/automotive.jpeg")}
            />
          </Paper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
              gap: "1rem 3rem",
              flexWrap: "wrap",
              width: "95%",
              //   backgroundColor: "#ebfcfa",
            }}
          >
            <Typography variant="h4" textAlign="center" color="primary">
              Key Duties
            </Typography>
            <ul className="duties-list">
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
                  Testing and analysis of failing prototypes
                </Typography>
              </li>
            </ul>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default HanonSystems;
