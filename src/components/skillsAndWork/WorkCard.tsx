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

  useEffect(() => {
    const resizeText = (element: HTMLElement | null, startingSize: number) => {
      if (!element) return;

      let fontSize = startingSize;
      element.style.fontSize = `${fontSize}px`;

      while (
        (element.scrollWidth > element.clientWidth &&
          element.clientWidth > 0) || // Check for clientWidth > 0
        (element.scrollHeight > element.clientHeight &&
          element.clientHeight > 0) // Check for clientHeight >
      ) {
        fontSize--;
        element.style.fontSize = `${fontSize}px`;
      }
    };

    // Store the current references to title and description elements
    const currentTitleRef = titleRef.current;
    const currentDescriptionRef = descriptionRef.current;

    // Apply resizing to title and description elements
    resizeText(currentTitleRef, 25);
    resizeText(currentDescriptionRef, 20);

    // Resize handler for window resize events
    const handleResize = () => {
      resizeText(currentTitleRef, 25);
      resizeText(currentDescriptionRef, 20);
    };

    const observer = new ResizeObserver(handleResize);
    if (currentTitleRef) observer.observe(currentTitleRef);
    if (currentDescriptionRef) observer.observe(currentDescriptionRef);

    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      if (currentDescriptionRef) observer.unobserve(currentDescriptionRef);
      observer.disconnect();
    };
  }, []);

  const navigate = useNavigate();
  const handleLinkClick = () => {
    if (props.link) {
      navigate(props.link);
    }
  };

  const cursor = props.link ? "pointer" : "default";

  return (
    <article
      onClick={handleLinkClick}
      className={`work-card ${props?.link ? "link-hover" : ""}`}
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
        <div>
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
          <Typography sx={{ marginTop: "0.5rem" }}>{props.location}</Typography>
        </div>
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
