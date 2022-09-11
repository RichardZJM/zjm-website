import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
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
  const smallScreen = useMediaQuery("(max-width:600px)");

  const navContent = (
    <>
      <NavButton buttonText="About" to="about" />
      <NavButton buttonText="Work" to="work-experience" />
      <NavButton buttonText="Skills" to="skills" />
      <NavButton buttonText="Projects" to="projects" />
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
          <MenuItem>
            <Button
              onClick={() => {
                navigator("about");
              }}
            >
              About
            </Button>
          </MenuItem>

          <MenuItem>
            <Button
              onClick={() => {
                navigator("work-experience");
              }}
            >
              Work Experience
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={() => {
                navigator("skills");
              }}
            >
              Skills
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={() => {
                navigator("projects");
              }}
            >
              Projects
            </Button>
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
            marginLeft: "1rem",
          }}
          style={{ backgroundColor: "white" }}
        >
          <ZJMLogo height="4rem" width="6rem" />
        </Button>
        {barContent}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
