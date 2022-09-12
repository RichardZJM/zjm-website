import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./WorkExperienceCard.css";

type WorkExperienceCardProps = {
  title: string;
  employer: string;
  dates: string;
  image: any;
  description: string;
  link: string;
  reference: string;
};

function WorkExperienceCard(props: WorkExperienceCardProps) {
  const navigate = useNavigate();

  const readMoreHandler = () => {
    navigate(props.link);
  };

  return (
    <Paper className="work-experience-container">
      <Typography variant="h3" textAlign="center" sx={{ fontWeight: "600" }}>
        {props.title}
      </Typography>
      <Typography variant="h4" color="primary" textAlign="center">
        {props.employer}
      </Typography>
      <Typography variant="h5" color="secondary" textAlign="center">
        {props.dates}
      </Typography>

      <img src={props.image} alt="Temp" className="work-options-image" />
      <h2 className="option-description">{props.description}</h2>
      <div>
        <Button variant="contained" onClick={readMoreHandler}>
          Read More
        </Button>
        <Button variant="text" href={props.reference}>
          Reference &#62;
        </Button>
      </div>
    </Paper>
  );
}

export default WorkExperienceCard;
