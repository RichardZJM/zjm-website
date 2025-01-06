import { Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ZJMLogo from "../ZJMLogo";
import "./HomePage.css";
import Featured from "../featured/Featured";

/**
 * Functional Component for the home page of the webside
 * @returns JSX of the Home Page
 */
function HomePage(props: { welcomeMessage: string }) {
  React.useEffect(() => {
    AOS.init({ duration: 600, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="home-page-container">
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "4rem",
            margin: "2rem 0 3rem 0",
          }}
        >
          <Paper
            data-aos="fade-up"
            data-aos-duration="1500"
            sx={{
              padding: "1rem 2rem",
              marginTop: "3rem",
              textAlign: "center",
              borderRadius: "2rem",
              fontSize: "12vw",
            }}
          >
            <ZJMLogo height="fit-content(24rem)" width="auto" auto={true} />
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                fontSize: "10vw",
              }}
            >
              {props.welcomeMessage}
            </Typography>
          </Paper>

          <Container
            sx={{
              marginTop: "10rem",
              display: "flex",
              justifyContent: "center",
              flexFlow: "wrap",
              gap: "2rem 4rem",
            }}
          >
            <img
              data-aos="flip-right"
              className="drawn-profile-pic"
              src={require("../../images/PFP5.jpg")}
              alt=" Profile of Zijian (Richard) Meng"
            />
            <Paper
              data-aos="flip-left"
              sx={{
                padding: "1rem 3rem",
                borderRadius: "2rem",
                maxWidth: "25rem",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "left",
                }}
              >
                Hello there, my name is Zijian, but you can call me Richard.
                Welcome to my website. Come on in!
              </Typography>
            </Paper>
          </Container>
        </Container>
      </section>
      <Featured />
      {/* <section className="quick-options section-container">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: theme.palette.secondary.main,
            fontStyle: "bold",
            textAlign: "center",
            width: "40rem",
            maxWidth: "90%",
          }}
        >
          Short on time? Maybe looking for something specific?
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "600",
            color: theme.palette.primary.main,
            fontStyle: "italic",
          }}
        >
          Jump to one of the below!
        </Typography>
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
          sx={{
            marginTop: "3rem",
            display: "flex",
            width: "85vw",
            maxWidth: "1200px",
            flexWrap: "wrap",
            gap: "2rem 3rem",
            justifyContent: "center",
          }}
        >
          <OptionsCard
            image={require("../../images/homeOptions/aboutBG.png")}
            title="About"
            description=" Introduction, personal interests, career goals."
            link="/about"
          />
          <OptionsCard
            image={require("../../images/homeOptions/workBG.jpg")}
            title="Work Experience"
            description="Work experience. Applied skills, overview, and references."
            link="/work-experience"
          />
          <OptionsCard
            image={require("../../images/homeOptions/engineeringBG.jpg")}
            title="Projects"
            description="Personal projects, capstone, research projects. Demos and code."
            link="/projects"
          />
          <OptionsCard
            image={require("../../images/homeOptions/skillsBG.jpg")}
            title="Skills"
            description="Technical and professional skill summary."
            link="/skills"
          />
          <OptionsCard
            image={require("../../images/homeOptions/contactBG.jpg")}
            title="Contact Me!"
            description="Contact Info, Github, Resume, LinkedIn."
            link="/contact"
          />
        </Box>
      </section> */}
    </>
  );
}

export default HomePage;
