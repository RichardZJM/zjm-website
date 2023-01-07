import { Typography, Container } from "@mui/material";
import React from "react";
import "./Contact.css";
import ContactMethodCard from "./ContactMethodCard";

import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";

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
            title="Primary Email"
            description="Image is used for spam protection."
            colour="#98b7f5"
            icon={<EmailIcon color="primary" fontSize="large" />}
            buttonText="See Profile"
          />
          <ContactMethodCard
            title="Github"
            description="Peruse some of the code behind some of my projects. See additional works and contributions."
            colour="#98b7f5"
            icon={<GithubIcon color="primary" fontSize="large" />}
            link="https://github.com/RichardZJM"
          />
          <ContactMethodCard
            title="Resume"
            description="Some personal information has been redacted. Full version to be provided upon request."
            colour="#98b7f5"
            icon={<ContactPageIcon color="primary" fontSize="large" />}
            link="https://www.linkedin.com/in/richard-meng-zjm/"
            buttonText="View Or Download"
          />
          <ContactMethodCard
            title="LinkedIn"
            description="LinkedIn Profile."
            colour="#98b7f5"
            icon={<LinkedInIcon color="primary" fontSize="large" />}
            link="https://www.linkedin.com/in/richard-meng-zjm/"
            buttonText="See Profile"
          />
          <ContactMethodCard
            title="Phone"
            colour="#17bbc1"
            description="To be provided upon request. Canadian phone number."
            icon={<LocalPhoneIcon color="secondary" fontSize="large" />}
          />
          <ContactMethodCard
            title="Secondary Email"
            description="Image is used for spam protection."
            colour="#17bbc1"
            icon={<EmailIcon color="secondary" fontSize="large" />}
            buttonText="See Profile"
          />
          <ContactMethodCard
            title="Location"
            colour="#17bbc1"
            icon={<PublicIcon color="secondary" fontSize="large" />}
            buttonText="See Profile"
          />
        </div>
      </section>
    </Container>
  );
}

export default Contact;
