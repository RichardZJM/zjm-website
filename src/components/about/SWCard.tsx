import { Card, Typography } from "@mui/material";
import React from "react";
import "./SWCard.css";

type SWCardProps = {
  color: string;
  title: string;
  icon: any;
  description: string;
};

function SWCard(props: SWCardProps) {
  return (
    <div className="sw-card" style={{ backgroundColor: props.color }}>
      <Card className="sw-icon-holder">
        {props.icon}
        <Typography variant="body1" zIndex={0} sx={{ fontWeight: "600" }}>
          {props.title}
        </Typography>
      </Card>
      <Typography variant="body1">{props.description}</Typography>
    </div>
  );
}

export default SWCard;
