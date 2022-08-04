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
      <Toolbar sx={{ padding: "15px 10px" }}>
        <Button
          variant="contained"
          onClick={() => {
            handleLogoClick();
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "0",
          }}
        >
          <ZJMLogo height="100px" width="150px" />
        </Button>
        <NavButton buttonText="experience" to="experience" />
        <NavButton buttonText="projects" to="projects" />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
