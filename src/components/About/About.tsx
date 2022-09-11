import { Typography, Paper, Container, Chip, useTheme } from "@mui/material";
import React from "react";
import "./About.css";
import SWCard from "./SWCard";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SchoolIcon from "@mui/icons-material/School";
import SmsIcon from "@mui/icons-material/Sms";
import WorkIcon from "@mui/icons-material/Work";

import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import EggIcon from "@mui/icons-material/Egg";
import SearchIcon from "@mui/icons-material/Search";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function About() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <section className="about-container">
        <Typography
          variant="h1"
          color="secondary"
          sx={{
            fontWeight: "600",
            fontStyle: "bold",
            textAlign: "center",
            maxWidth: "40rem",
          }}
        >
          About
        </Typography>
        <div className="location-container">
          <Typography variant="h3" color="white" sx={{ fontWeight: "700" }}>
            Origins
          </Typography>
          <Paper
            sx={{
              padding: "1rem",
              maxWidth: "20rem",
              height: "fit-content",
            }}
          >
            <Typography variant="h5">
              A mechanical engineering student attending{" "}
              <em>Queen's University</em>, hailing from <em>Ottawa, Ontario</em>
              .
              <br />
            </Typography>
          </Paper>
        </div>
        <div className="interests-container">
          <div className="interests-image-container">
            <Typography
              variant="h3"
              color="white"
              textAlign="center"
              sx={{ fontWeight: "700" }}
            >
              Mechanical Design Interests
            </Typography>
          </div>
          <div className="body-container">
            <Typography
              variant="h4"
              color="primary"
              textAlign="center"
              sx={{ fontWeight: "500", width: "90%" }}
            >
              A{" "}
              <em style={{ color: theme.palette.secondary.main }}>
                fascination
              </em>{" "}
              with mechanical design, physical problem solving, and tinkering.
            </Typography>
            <div className="hobby-container">
              <Typography
                variant="h5"
                color="secondary"
                sx={{ fontWeight: "500" }}
              >
                Prior Hobbies:
              </Typography>
              <Chip label="3-D Printing" color="secondary" size="medium" />
              <Chip label="Aluminum Casting" color="secondary" size="medium" />
              <Chip label="Origami" color="secondary" size="medium" />
            </div>
          </div>
        </div>
        <div className="programming-container">
          <div className="programming-text-container">
            <Typography variant="h3" color="white" sx={{ fontWeight: "700" }}>
              A Second Curiosity
            </Typography>
            <Typography variant="h5" color="white">
              I've always been interested in coding too. From creating simple
              video games in my youth, to using computaional tools for
              engineering design.
            </Typography>
          </div>
          <img
            className="gameP-image"
            alt="Animated gif of my game."
            src={require("../../images/about/GameP.gif")}
          />
        </div>
        <div className="future-goals-container">
          <Typography variant="h3">Future Goals</Typography>
          <Paper className="career-goals">
            <Typography variant="h5">A Combination of Interests</Typography>
            <Typography variant="h6">
              An ideal path would combine aspects of my interests...
              <br /> and pay decently...
              <br />
              There are some ideas in mind.
            </Typography>
          </Paper>
          <div className="goals-chips-container">
            <Chip color="secondary" label="Master's Degree" />
            <Chip color="secondary" label="Software Enginering Job" />
            <Chip color="secondary" label="Robotics Engineering" />
            <Chip color="secondary" label="Mechanical Engineer" />
            <Chip
              color="secondary"
              icon={<HelpOutlineIcon />}
              label="Novelist"
            />
          </div>
        </div>
        <div className="strengths-weaknesses-container">
          <div className="s-w-wrapper">
            <Paper sx={{ padding: "1rem" }}>
              <Typography variant="h3">Strengths</Typography>
            </Paper>
            <div className="s-w-container">
              <SWCard
                title="Organization & Multitasking"
                description="Experience juggling multiple urgent prototype orders while on internship. Comfortable planning out and handling  conflicting timelines and priorities."
                color={theme.palette.success.main}
                icon={<AccountTreeIcon />}
              />
              <SWCard
                title="Learning New Skills"
                description="Proven ability to learn skills quickly in hackathons and on internship. Eager to cooperation with teammates to enhance understanding."
                color={theme.palette.success.main}
                icon={<SchoolIcon />}
              />
              <SWCard
                title="Communication"
                description="Coordinated with technical and non-technical team members in professional settings. Experience with breaking down complex problems of issues for presentation."
                color={theme.palette.success.main}
                icon={<SmsIcon />}
              />
              <SWCard
                title="Initiative"
                description="Willing to put exceptional quality into work and take it one step above. Dedicated to continous improvement."
                color={theme.palette.success.main}
                icon={<WorkIcon />}
              />
            </div>
          </div>

          <div className="s-w-wrapper">
            <Paper sx={{ padding: "1rem" }}>
              <Typography variant="h3"> Weaknesses</Typography>
            </Paper>

            <div className="s-w-container">
              <SWCard
                title="Poor Confidence "
                description="Likely to view potential outcomes with pessimisim. Overly hesitant and cautious. Aiming to improve by verifying work with teamates zone and taking a strong leadership role."
                color={theme.palette.primary.main}
                icon={<EmojiPeopleIcon />}
              />
              <SWCard
                title="Reservation"
                description="General tendency of introversion which is constantly combated. Preference for facts over emotion. Aim to improve by pushing myself out of the comfort zone and being more talkative."
                color={theme.palette.primary.main}
                icon={<EggIcon />}
              />
              <SWCard
                title="Overly Focused on Details"
                description="Occasionally obsses over details. Spent excessive time worrying over minor things and lose track of the bigger picture. Improve by setting schedules and rigid work criteria."
                color={theme.palette.primary.main}
                icon={<SearchIcon />}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
export default About;
