import { Container, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import YoutubeEmbed from "../miscUtilities/YoutubeEmbed";

function Featured() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      <Paper sx={{ padding: "1rem" }}>
        <Typography variant="h4">SAM-e Fluid Modelling</Typography>
      </Paper>
      <YoutubeEmbed embedID="Nsgq0Kj2ymU" />
    </Container>
  );
}

export default Featured;
