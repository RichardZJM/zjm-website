import React from "react";
import { useNavigate } from "react-router-dom";
import "./OptionsCard.css";

type OptionsCardProps = {
  image: any;
  title: string;
  description: string;
  link?: string;
};

function OptionsCard(props: OptionsCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="option-container"
      onClick={() => {
        if (props.link) navigate(props.link);
      }}
    >
      <h2 className="option-title">{props.title}</h2>
      <img
        src={props.image}
        alt="Flavour Background"
        className="flavor-image"
      />
      <h2 className="option-description">{props.description}</h2>
    </div>
  );
}

export default OptionsCard;
