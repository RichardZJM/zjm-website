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
import React, { useState } from "react";
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
  tryItOut?: string;
};

function ProjectsCard(props: ProjectsCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const accordianHeaderText = isOpen ? "Show Less" : "Read More";

  const link = props.tryItOut || props.explore || props.githubLink;

  let buttons = (
    <div className="button-container">
      <ButtonGroup size="small" variant="contained">
        {props?.tryItOut && (
          <Button href={props?.tryItOut} target="_blank">
            Try it Out!
          </Button>
        )}
        {props?.githubLink && (
          <Button target="_blank" href={props?.githubLink}>
            Github
          </Button>
        )}
        {props?.explore && (
          <Button target="_blank" href={props?.explore}>
            Explore Further
          </Button>
        )}
      </ButtonGroup>
    </div>
  );

  if (
    props?.githubLink === undefined &&
    props?.explore === undefined &&
    props?.tryItOut === undefined
  ) {
    buttons = <></>;
  }

  return (
    <article className="project-card">
      <div
        className="project-image-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <Paper className="project-title-container">
          <a
            href={link}
            target="_blank"
            className="project-click-wrapper"
            rel="noreferrer"
          >
            <Typography variant="h5">{props.title}</Typography>
          </a>
        </Paper>
        <Paper className="project-title-container">
          <Typography variant="body1">{props.subtitle}</Typography>
        </Paper>
      </div>

      <Accordion
        className="acoord"
        disableGutters
        onChange={() => {
          setIsOpen((currOpen) => !currOpen);
        }}
      >
        <AccordionSummary expandIcon={<AutoStoriesIcon />}>
          <Typography variant="h6">{accordianHeaderText}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2"> {props.description}</Typography>
          
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
