import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavButton.css";

type navButtonProps = {
  buttonText: string; //Button Text
  to: string; //Link to navigate to
};

/**
 * Functional component for a nav button
 * @param props
 * @returns
 */
function NavButton(props: navButtonProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-button nav-button-active" : "nav-button"
      }
      to={props.to}
    >
      <Typography sx={{ color: "black" }} variant="h5">
        {props.buttonText}
      </Typography>
    </NavLink>
  );
}

export default NavButton;
