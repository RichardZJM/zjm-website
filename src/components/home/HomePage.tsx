import { Typography } from "@mui/material";
import React from "react";
import "./HomePage.css";

import ZJMLogo from "../ZJMLogo";
import { Box, Container } from "@mui/system";

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
