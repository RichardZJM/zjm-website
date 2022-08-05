import React from "react";
// import { Card, Paper } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theming";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
