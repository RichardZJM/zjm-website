import { Container, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import YoutubeEmbed from "../miscUtilities/YoutubeEmbed";
import "./Featured.css";

function Featured() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "7rem",
      }}
      maxWidth="xl"
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          color: theme.palette.secondary.main,
          fontStyle: "bold",
          textAlign: "center",
          width: "40rem",
          maxWidth: "90%",
        }}
      >
        Maybe you're not sure where to start?
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "600",
          color: theme.palette.primary.main,
          fontStyle: "italic",
        }}
      >
        Check out the featured content below!
      </Typography>

      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem 1rem",
          marginTop: "2rem",
        }}
      >
        <Typography variant="h4">SAM-e Fluid Modelling</Typography>

        <article className="same-capstone-article-container">
          <div className="same-capstone-section-container">
            <Typography>
              The SAM-e is a steam distribution manifold manufactured by Condair
              Inc. As an undergraduate engineering capstone, a representative
              model is being created to help Condair experiment with
              model-driven design and develop the next generation of product.
              With a group of five students, an OpenFoam computational fluid
              dynamics model is being developed. Experimental data provided by
              Condair will be used to validate the model, on top which the team
              will create a user interfaces to increase usability for Condair
              engineering teams.
            </Typography>
          </div>

          <div className="same-capstone-section-container">
            <Typography>
              It was an excellent opportunity to practice my professional and
              technical skills:
            </Typography>
            <ul className="same-capstone-skills-container">
              <li>
                <Typography color="primary">
                  Iterative Design Development
                </Typography>
              </li>
              <li>
                <Typography color="primary">
                  Fluid Mechanics & Thermodynamics
                </Typography>
              </li>
              <li>
                <Typography color="primary">Computational Modelling</Typography>
              </li>
              <li>
                <Typography color="primary">Code Maintenance</Typography>
              </li>
              <li>
                <Typography color="secondary">
                  Collaboration & Teamwork
                </Typography>
              </li>
              <li>
                <Typography color="secondary">
                  Adapting To & Adopting Unfamilar Technologies
                </Typography>
              </li>
              <li>
                <Typography color="secondary">
                  Meeting and Updating Project Scope to Client Needs
                </Typography>
              </li>
            </ul>
          </div>
        </article>
        <Typography variant="h5">
          Have some time? Why not watch a explanatory video?
        </Typography>
      </Paper>
      <YoutubeEmbed embedID="Nsgq0Kj2ymU" />
    </Container>
  );
}

export default Featured;
