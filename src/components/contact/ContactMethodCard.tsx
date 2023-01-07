import { Button, Typography } from "@mui/material";
import React from "react";
import "./ContactMethodCard.css";

type ContactMethodCardProps = {
  title: string;
  icon: any;
  colour: string;
  description?: string;
  link?: any;
  buttonText?: any;
  image?: any;
  altText?: string;
};

function ContactMethodCard(props: ContactMethodCardProps) {
  const buttonText = props.buttonText || "Go Now";
  return (
    <div
      style={{ borderColor: props.colour }}
      className="contact-method-container"
    >
      <div className="contact-method-title-container">
        {props.icon}
        <Typography variant="h4">{props.title}</Typography>
      </div>
      {props.image ? (
        <img
          src={props.image}
          alt="Email address as graphic"
          className="contact-email-image"
        />
      ) : (
        <></>
      )}
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
