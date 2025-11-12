import { Container, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import YoutubeEmbed from "../miscUtilities/YoutubeEmbed";
import "./Featured.css";

function Featured() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        marginTop: "6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "6rem",
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
          marginTop: "6rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ maxWidth: "60rem", textAlign: "center", fontWeight: "600" }}
        >
          Master's Thesis Defense Presentation
        </Typography>

        <div className="same-capstone-section-container">
          <Typography variant="h5">
            My Master's of Applied Science, Mechanical and Materials Engineering
            (co-supervised with Electrical and Computer Engineering) thesis
            defense presentation. Recorded at Nicol Hall, Queen's University, on
            November 10th 2025.
          </Typography>
        </div>

        <Typography variant="h5">Watch the recording below!</Typography>
      </Paper>
      <YoutubeEmbed embedID="hP_jupqCgoM" />

      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem 1rem",
          marginTop: "6rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ maxWidth: "60rem", textAlign: "center", fontWeight: "600" }}
        >
          Professional Engineers Ontario, Kingston Engineering Competition 2023
          3rd Place: SAM-e Fluid Modelling
        </Typography>

        <div className="same-capstone-section-container">
          <Typography variant="h5">
            The SAM-e is a steam distribution manifold manufactured by Condair
            Inc. As an undergraduate engineering capstone, an OpenFOAM model was
            created to help Condair experiment with model-driven design and
            develop their next generation of product.
          </Typography>
        </div>

        <Typography variant="h5">Watch the explanatory video below!</Typography>
      </Paper>
      <YoutubeEmbed embedID="Fz-x_mDFdRQ" />
    </Container>
  );
}

export default Featured;
