import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ZJMLogo from "../ZJMLogo";
import "./HomePage.css";

/**
 * Functional Component for the home page of the webside
 * @returns JSX of the Home Page
 */
function HomePage() {
  return (
    <>
      <Container>
        <Container>
          <Typography variant="h1">Welcome Home</Typography>;
        </Container>

        <ZJMLogo height="24rem" width="36rem" auto={true} />
        <img
          className="drawn-profile-pic"
          src={require("../../images/PFP.png")}
          // src="../../../images/PFP.png"
          alt="Stylized Profile of Zijian (Richard) Meng"
        />
      </Container>
    </>
  );
}

export default HomePage;
