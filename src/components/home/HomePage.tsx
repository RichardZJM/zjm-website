import { Typography } from "@mui/material";
import React from "react";

import ZJMLogo from "../ZJMLogo";

function HomePage() {
  return (
    <>
      <Typography variant="h1">Welcome Home</Typography>;
      <ZJMLogo height="200px" width="300px" />
      <ZJMLogo height="200px" width="300px" />
    </>
  );
}

export default HomePage;
