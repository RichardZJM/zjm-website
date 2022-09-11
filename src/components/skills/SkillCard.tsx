import { Paper } from "@mui/material";
import React from "react";
import "./SkillCard.css";

type SkillCardProps = {
  title: string;
  description: string;
  image: any;
  color: string;
};

function SkillCard(props: SkillCardProps) {
  return (
    <article className="skill-card" style={{ backgroundColor: props.color }}>
      <div
        className="skill-image-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <Paper className="skill-title-container">
          <h2 className="title-text">{props.title}</h2>
        </Paper>
      </div>
      <div className="skill-description-container">
        <p className="description-text">{props.description}</p>
      </div>
    </article>
  );
}

export default SkillCard;
