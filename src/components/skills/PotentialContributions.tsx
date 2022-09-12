import { Container, Typography, Box } from "@mui/material";
import React from "react";

function PotentialContributions() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem 1rem",
          width: "90%",
          maxWidth: "40rem",
        }}
      >
        <Typography variant="h3">Potential Contributions</Typography>

        <Typography
          variant="body1"
          color="secondary"
          sx={{ fontWeight: "400" }}
        >
          Academically, I have a strong a proven track record, thoroughly
          understanding most of the concepts explained. Adapting quickly, I
          apply existing knowledge to new challenges and improve myself
          continuously. When others require assistance I’m eager to help; when I
          require help, I am willing to receive it.
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ fontWeight: "400" }}
        >
          Academics can tend to be admittedly unpractical. Notwithstanding, my
          knowledge has also been tested in practical applications. In my
          internship and group work, I have continually drawn upon knowledge
          from applied thermodynamics, solid mechanics, manufacturing methods,
          and computational tools. My experience is back by interest as well. I
          find myself recognizing what I’ve learned in personal pursuits and
          everyday scenarios.
        </Typography>
        <Typography
          variant="body1"
          color="secondary"
          sx={{ fontWeight: "400" }}
        >
          Additionally, I have practice with professional skills. My internship
          was essentially a continuous exercise in communication, collaboration,
          organization, and time management. I’ve handled several urgent
          projects simultaneously and coordinated with various teams. Kindly
          refer to the above skills for more details
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          margin="2rem 0"
          textAlign="center"
        >
          So, what can I <em>contribute</em> to a group?
        </Typography>
        <Typography variant="h6" color="secondary">
          I can contribute strong technical knowledge and exceptional soft
          skills. Particularly, I’m most confident in delivering computational
          modelling in CAD or with other tools, concise written reports,
          reliable project management, and strong presentations.
        </Typography>
      </Box>
    </Container>
  );
}

export default PotentialContributions;
