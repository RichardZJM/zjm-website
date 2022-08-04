import { Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type navButtonProps = {
  buttonText: string;
  to: string;
};

function NavButton(props: navButtonProps) {
  return (
    <NavLink to={props.to}>
      <Typography sx={{ color: "black" }} variant="h2">
        {props.buttonText}
      </Typography>
    </NavLink>
  );
}

export default NavButton;
