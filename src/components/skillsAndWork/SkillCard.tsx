import React, { useEffect, useRef } from "react";
import { Paper } from "@mui/material";
import "./SkillCard.css";

type SkillCardProps = {
  title: string;
  description: string;
  image: any;
  color: string;
};

function SkillCard(props: SkillCardProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  // Adjust font size for both title and description
  useEffect(() => {
    const resizeText = (element: HTMLElement | null) => {
      if (!element) return;

      let fontSize = 25; // Starting font size
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
    resizeText(titleRef.current);
    resizeText(descriptionRef.current);

    // Run on load and resize
    window.addEventListener("resize", () => {
      resizeText(titleRef.current);
      resizeText(descriptionRef.current);
    });

    return () =>
      window.removeEventListener("resize", () => {
        resizeText(titleRef.current);
        resizeText(descriptionRef.current);
      });
  }, [props.title, props.description]); // Re-run effect if title or description changes

  return (
    <article className="skill-card" style={{ backgroundColor: props.color }}>
      <div
        className="skill-image-container"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <Paper className="skill-title-container">
          <h2 className="title-text" ref={titleRef}>
            {props.title}
          </h2>
        </Paper>
      </div>
      <div className="skill-description-container">
        <p className="description-text" ref={descriptionRef}>
          {props.description}
        </p>
      </div>
    </article>
  );
}

export default SkillCard;
