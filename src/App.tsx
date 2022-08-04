import React from "react";
import { Card, Paper } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
