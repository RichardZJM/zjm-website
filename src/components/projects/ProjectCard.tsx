import {
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import "./ProjectsCard.css";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";

type ProjectsCardProps = {
  title: string;
  subtitle: string;
  description: string;
  chips: string[];
  image: any;
  githubLink?: string;
  explore?: string;
};

function ProjectsCard(props: ProjectsCardProps) {
  let buttons = (
    <div className="button-container">
      <ButtonGroup size="small" variant="contained">
        {props?.githubLink && <Button href={props?.githubLink}>Github</Button>}
        {props?.explore && (
          <Button href={props?.explore}>Explore Further</Button>
        )}
      </ButtonGroup>
    </div>
  );

  if (props?.githubLink === undefined && props?.explore === undefined) {
    buttons = <></>;
  }

  return (
    <article className="project-card">
      <div
        className="project-image-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <Paper className="project-title-container">
          <Typography variant="h5">{props.title}</Typography>
        </Paper>
        <Paper className="project-title-container">
          <Typography variant="body1">{props.subtitle}</Typography>
        </Paper>
      </div>
      <Accordion className="acoord" disableGutters>
        <AccordionSummary expandIcon={<AutoStoriesIcon />}>
          <Typography variant="h6">Read More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.description}
          <div className="used-chip-container">
            {props.chips.map((ele) => (
              <Chip size="small" label={ele} />
            ))}
          </div>
          {buttons}
        </AccordionDetails>
      </Accordion>
    </article>
  );
}

export default ProjectsCard;
