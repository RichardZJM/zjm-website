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

  useEffect(() => {
    const currentTitleRef = titleRef.current; // Store current ref value
    const currentDescriptionRef = descriptionRef.current; // Store current ref value

    const resizeText = (element: HTMLElement | null) => {
      if (!element) return;

      let fontSize = 25;
      element.style.fontSize = `${fontSize}px`;

      while (
        element.scrollWidth > element.clientWidth ||
        element.scrollHeight > element.clientHeight
      ) {
        fontSize--;
        element.style.fontSize = `${fontSize}px`;
      }
    };

    resizeText(currentTitleRef); // Use the stored value
    resizeText(currentDescriptionRef); // Use the stored value

    const handleResize = () => {
      resizeText(currentTitleRef); // Use the stored value
      resizeText(currentDescriptionRef); // Use the stored value
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
