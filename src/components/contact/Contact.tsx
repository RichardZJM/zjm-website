import { Typography, Container } from "@mui/material";
import React from "react";
import "./Contact.css";
import ContactMethodCard from "./ContactMethodCard";

import GithubIcon from "@mui/icons-material/GitHub";

function Contact() {
  return (
    <Container maxWidth="xl">
      <section className="contact-section">
        <Typography variant="h3">I'd love to hear from you!</Typography>
        <Typography variant="h5">
          Let's get in touch. What would you prefer?
        </Typography>
        <div className="contact-methods-grid">
          <ContactMethodCard
            title="Github"
            description="Come view the code behind some of my work."
            icon={<GithubIcon color="primary" fontSize="large" />}
            link="https://github.com/RichardZJM"
          />
        </div>
      </section>
    </Container>
  );
}

export default Contact;
