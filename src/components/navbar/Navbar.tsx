import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ZJMLogo from "../ZJMLogo";
import NavButton from "./NavButton";
import MenuIcon from "@mui/icons-material/Menu";

import "./Navbar.css";

/**
 * Functional component of the website's nav bar
 * @returns
 */
function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigator = useNavigate();
  const smallScreen = useMediaQuery("(max-width:800px)");

  const navContent = (
    <>
      <NavButton buttonText="About" to="about" />
      <NavButton buttonText="Experience" to="experience" />
      <NavButton buttonText="Projects" to="projects" />
      <NavButton buttonText="Contact" to="contact" />
    </>
  );

  let barContent = navContent;

  /**
   * Handle for the clicking of the logo, navigates user to the home page
   */
  const handleLogoClick = () => {
    navigator("home");
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  if (smallScreen) {
    barContent = (
      <Button variant="outlined">
        <MenuIcon htmlColor="black" onClick={handleOpen} />
      </Button>
    );
  }

  return (
    <AppBar position="sticky">
      <Menu
        open={modalOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <div className="modal-container">
          <MenuItem
            onClick={() => {
              navigator("about");
              handleClose();
            }}
          >
            <Typography variant="h6">About</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigator("experience");
              handleClose();
            }}
          >
            <Typography variant="h6">Experience</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigator("projects");
              handleClose();
            }}
          >
            <Typography variant="h6">Projects</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigator("contact");
              handleClose();
            }}
          >
            <Typography variant="h6">Contact</Typography>
          </MenuItem>
        </div>
      </Menu>
      <Toolbar sx={{ padding: "5px 0px" }} className="bar">
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
            marginLeft: "0.5rem",
          }}
          style={{ backgroundColor: "white" }}
        >
          <ZJMLogo height="3.5rem" width="5rem" />
        </Button>
        {barContent}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
