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
  reference?: string;
};

function WorkExperienceCard(props: WorkExperienceCardProps) {
  const navigate = useNavigate();

  const readMoreHandler = () => {
    navigate(props.link);
  };

  return (
    <Paper className="work-experience-contianer">
      <Typography variant="h3">{props.title}</Typography>
      <Typography variant="h4" color="primary">
        {props.employer}
      </Typography>
      <Typography variant="h5" color="secondary">
        {props.dates}
      </Typography>

      <img src={props.image} alt="Temp" className="work-options-image" />
      <h2 className="option-description">{props.description}</h2>
      <div>
        <Button variant="contained" onClick={readMoreHandler}>
          Read More;
        </Button>
        <Button variant="text">
          <Link to="/files/myfile.pdf" target="_blank" download>
            Reference &#62;
          </Link>
        </Button>
      </div>
    </Paper>
  );
}

export default WorkExperienceCard;
