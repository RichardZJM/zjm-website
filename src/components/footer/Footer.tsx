import { BottomNavigation, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const navigate = useNavigate();
  return (
    <BottomNavigation className="footer-container">
      <Button variant="outlined" size="small" onClick={() => navigate("/home")}>
        Home
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate("/about")}
      >
        About
      </Button>

      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate("/work-experience")}
      >
        Work Experience
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate("/skills")}
      >
        Skills
      </Button>

      <img
        className="logo-image"
        src={require("../../images/ZJM_Logo.png")}
        alt="ZJM's Logo"
      ></img>
      <Typography>Zijian Meng's E-Portfolio and Website 2022</Typography>
    </BottomNavigation>
  );
}

export default Footer;
