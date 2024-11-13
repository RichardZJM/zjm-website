import React, { useEffect, useRef } from "react";
import { Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./WorkCard.css";

type WorkCardProps = {
  title: string;
  employer?: string;
  location: string;
  description: string;
  image: any;
  color: string;
  link?: string;
};

function WorkCard(props: WorkCardProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  // Adjust font size for both title and description
  useEffect(() => {
    const resizeText = (element: HTMLElement | null, startingSize: number) => {
      if (!element) return;

      let fontSize = startingSize; // Starting font size
      element.style.fontSize = `${fontSize}px`;

      // Decrease font size until text fits within the container
      while (
        element.scrollWidth > element.clientWidth ||
        element.scrollHeight > element.clientHeight
      ) {
        fontSize--;
        element.style.fontSize = `${fontSize}px`;
      }
    };

    // Apply resizing to title and description elements
    resizeText(titleRef.current, 35);
    resizeText(descriptionRef.current, 20);

    // Run on load and resize
    window.addEventListener("resize", () => {
      resizeText(titleRef.current, 35);
      resizeText(descriptionRef.current, 20);
    });

    return () =>
      window.removeEventListener("resize", () => {
        resizeText(titleRef.current, 35);
        resizeText(descriptionRef.current, 20);
      });
  }, [props.title, props.description]); // Re-run effect if title or description changes

  const navigate = useNavigate();
  const handleLinkClick = () => {
    if (props.link) {
      navigate(props.link);
    }
  };

  let cursor = "default";
  if (props.link) {
    cursor = "pointer";
  }

  return (
    <article
      onClick={handleLinkClick}
      className="work-card"
      style={{ backgroundColor: props.color, cursor: cursor }}
    >
      <div
        className="work-image-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <Paper className="work-title-container">
          <h2 className="title-text" ref={titleRef}>
            {props.title}
          </h2>
        </Paper>
      </div>
      <div className="work-description-container">
        {props?.employer && (
          <Typography
            sx={{
              fontFamily: "Oxygen",
              fontSize: "30",
              fontWeight: "700",
            }}
          >
            {props.employer}
          </Typography>
        )}
        <Typography sx={{ marginBottom: "0.5rem" }}>
          {props.location}
        </Typography>
        <div>
          <p className="description-text" ref={descriptionRef}>
            {props.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default WorkCard;
