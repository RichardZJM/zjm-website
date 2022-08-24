import React from "react";
import "./OptionsCard.css";

type OptionsCardProps = {
  image: any;
  title: string;
  description: string;
};

function OptionsCard(props: OptionsCardProps) {
  return (
    <div className="option-container">
      <h2 className="option-title">{props.title}</h2>
      <img src={props.image} alt="Temp" className="flavor-image" />
      <h2 className="option-description">{props.description}</h2>
    </div>
  );
}

export default OptionsCard;
