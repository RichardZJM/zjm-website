import React from "react";
// import { Card, Paper } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theming";
import possibleWelcomeMessages from "./components/WelcomeMessages";
import WorkExperience from "./components/workExperience/WorkExperience";
import HanonSystems from "./components/workExperience/hanonSystems/HanonSystems";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";

/**
 * Functional Component, Layout of the website
 * @returns JSX of App
 */
function App() {
  const welcomeMessage =
    possibleWelcomeMessages[
      Math.floor(Math.random() * possibleWelcomeMessages.length)
    ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route
            path="home"
            element={<HomePage welcomeMessage={welcomeMessage} />}
          />
          <Route path="about" element={<About />} />
          <Route path="work-experience" element={<WorkExperience />} />
          <Route
            path="work-experience/hanon-systems"
            element={<HanonSystems />}
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
