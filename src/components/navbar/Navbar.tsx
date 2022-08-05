import { AppBar, Button, Toolbar } from "@mui/material";
import ZJMLogo from "../ZJMLogo";
import React from "react";
import { Box } from "@mui/system";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigator = useNavigate();
  const handleLogoClick = () => {
    navigator("home");
  };
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ padding: "5px 0px" }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            handleLogoClick();
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "0",
          }}
          style={{ backgroundColor: "white" }}
        >
          <ZJMLogo height="4rem" width="6rem" />
        </Button>
        <NavButton buttonText="Experience" to="experience" />
        <NavButton buttonText="Projects" to="projects" />
        <NavButton buttonText="Contact" to="contact" />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
