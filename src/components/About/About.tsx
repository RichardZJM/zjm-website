import { Typography, Paper, Container, Chip } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import "./About.css";

function About() {
  return (
    <Container maxWidth="xl">
      <section className="about-container">
        <Typography
          variant="h1"
          color="secondary"
          sx={{
            fontWeight: "600",
            fontStyle: "bold",
            textAlign: "center",
            maxWidth: "40rem",
          }}
        >
          About
        </Typography>
        <div className="location-container">
          <Typography variant="h3" color="white" sx={{ fontWeight: "700" }}>
            Origins
          </Typography>
          <Paper
            sx={{
              padding: "1rem",
              maxWidth: "20rem",
              height: "fit-content",
            }}
          >
            <Typography variant="h5">
              Hailing from Ottawa, Ontario.
              <br />
            </Typography>
          </Paper>
        </div>
        <div className="interests-container">
          <div className="interests-image-container">
            <Typography
              variant="h3"
              color="white"
              textAlign="center"
              sx={{ fontWeight: "700" }}
            >
              Mechanical Design Interests
            </Typography>
          </div>
          <div className="body-container">
            <Typography
              variant="h4"
              color="primary"
              textAlign="center"
              sx={{ fontWeight: "500", width: "90%" }}
            >
              A <em>fascination</em> with mechanical design, physical problem
              solving, and tinkering.
            </Typography>
            <div className="hobby-container">
              <Typography
                variant="h5"
                color="secondary"
                sx={{ fontWeight: "500" }}
              >
                Prior Hobbies:
              </Typography>
              <Chip label="3-D Printing" color="secondary" size="medium" />
              <Chip label="Aluminum Casting" color="secondary" size="medium" />
              <Chip label="Origami" color="secondary" size="medium" />
            </div>
          </div>
        </div>
        <div className="programming-container">
          <div className="programming-text-container">
            <Typography variant="h3" color="white" sx={{ fontWeight: "700" }}>
              A Second Curiosity
            </Typography>
            <Typography variant="h5" color="white">
              I've always been intrested in coding too. From creating simple
              video games in my youth, to using computaional tools for
              engineering design.
            </Typography>
          </div>
          <img
            className="gameP-image"
            src={require("../../images/about/GameP.gif")}
          />
        </div>
        <div className="strengths-weaknesses-container">
          <div className="s-w-container"></div>
        </div>
      </section>
    </Container>
  );
}
export default About;
