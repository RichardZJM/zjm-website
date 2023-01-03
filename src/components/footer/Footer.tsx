import { BottomNavigation, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const navigate = useNavigate();
  const [fixFooter, setFixFooter] = useState(false);

  useEffect(() => {
    setFixFooter(document.documentElement.offsetHeight < window.innerHeight);
  });

  console.log(document.documentElement.offsetHeight);
  console.log(window.innerHeight);
  const sx = { left: 0, bottom: 0, right: 0, position: "absolute" };
  return (
    <BottomNavigation className="footer-container" sx={fixFooter ? sx : {}}>
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
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate("/projects")}
      >
        Projects
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate("/contact")}
      >
        Contact
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
