import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ZJMLogo from "../ZJMLogo";
import NavButton from "./NavButton";

/**
 * Functional component of the website's nav bar
 * @returns
 */
function Navbar() {
  const navigator = useNavigate();

  /**
   * Handle for the clicking of the logo, navigates user to the home page
   */
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
