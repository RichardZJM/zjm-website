import { Button, Typography } from "@mui/material";
import React from "react";
import "./ContactMethodCard.css";

type ContactMethodCardProps = {
  title: string;
  icon: any;
  description: string;
  link?: any;
  buttonText?: any;
  image?: any;
};

function ContactMethodCard(props: ContactMethodCardProps) {
  const buttonText = props.buttonText || "Go Now";
  return (
    <div className="contact-method-container">
      <div className="contact-method-title-container">
        {props.icon}
        <Typography variant="h4">{props.title}</Typography>
      </div>

      <Typography>{props.description}</Typography>
      {props.link ? (
        <Button href={props.link} target="_blank">
          {buttonText}
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ContactMethodCard;
