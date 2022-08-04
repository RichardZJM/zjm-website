import { Typography } from "@mui/material";
import React from "react";

import ZJMLogo from "../ZJMLogo";

function HomePage() {
  return (
    <>
      <Typography variant="h1">Welcome Home</Typography>;
      <ZJMLogo height="300px" width="450px" auto={true} />
    </>
  );
}

export default HomePage;
