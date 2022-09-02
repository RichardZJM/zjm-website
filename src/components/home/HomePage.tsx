import { Box, Paper, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ZJMLogo from "../ZJMLogo";
import "./HomePage.css";
import OptionsCard from "./OptionsCard";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./About";

/**
 * Functional Component for the home page of the webside
 * @returns JSX of the Home Page
 */
function HomePage(props: { welcomeMessage: string }) {
  const scollCompletion = 200;
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const theme = useTheme();
  console.log(scrollPosition);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    AOS.init({ duration: 600, once: true });
    AOS.refresh();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../images/homePageHero.jpg")}
            alt="Stylized Profile of Zijian (Richard) Meng"
            style={{
              minWidth: "110rem",
              maxWidth: "100vw",
              display: "block",
              objectFit: "cover",
              filter: "brightness(70%)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            // className="drawn-profile-pic"
            src={require("../../images/about/ottawa.jpg")}
            // src="../../../images/PFP.png"
            alt="Stylized Profile of Zijian (Richard) Meng"
            style={{
              minWidth: "110rem",
              maxWidth: "100vw",
              display: "block",
              objectFit: "cover",
              // filter: "brightness(70%)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0}>
          <div className="home-page-container">
            <Container
              disableGutters
              maxWidth="xl"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "4rem",
                paddingBottom: "4rem",
                margin: "3rem 0 3rem 0",
              }}
            >
              <ZJMLogo height="fit-content(24rem)" width="auto" auto={true} />

              <Paper
                sx={{
                  padding: "1rem 2rem",
                  marginTop: "3rem",
                  textAlign: "center",
                  borderRadius: "2rem",
                  fontSize: "12vw",
                }}
              >
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
                  // backgroundColor: "white",
                  marginTop: "10rem",
                  display: "flex",
                  justifyContent: "center",
                  flexFlow: "wrap",
                }}
              >
                <img
                  className="drawn-profile-pic"
                  src={require("../../images/PFP.png")}
                  alt="Stylized Profile of Zijian (Richard) Meng"
                  style={{ marginLeft: "4rem", marginRight: "4rem" }}
                />
                <Paper
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
                    Let's get started!
                  </Typography>
                </Paper>
              </Container>
            </Container>
          </div>
          <section className="quick-options section-container">
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                color: theme.palette.secondary.main,
                fontStyle: "bold",
                textAlign: "center",
                maxWidth: "40rem",
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
              sx={{
                marginTop: "3rem",
                display: "flex",
                maxWidth: "85vw",
                overflowX: "auto",
                paddingBottom: "1rem",
              }}
            >
              <OptionsCard
                image={require("../../images/aboutBG.png")}
                title="About"
                description=" Introduction, strengths, career goals, potential contributions, personal interests."
              />
              <OptionsCard
                image={require("../../images/workBG.jpg")}
                title="Work Experience"
                description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
              />
              <OptionsCard
                image={require("../../images/engineeringBG.jpg")}
                title="Design Experience & Projects"
                description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
              />
              <OptionsCard
                image={require("../../images/skillsBG.jpg")}
                title="Skills"
                description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
              />
              <OptionsCard
                image={require("../../images/engineeringBG.jpg")}
                title="Engineering Experience"
                description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
              />
            </Box>
          </section>
          <section className="section-container">
            <Typography
              variant="h2"
              sx={{
                fontWeight: "600",
                color: theme.palette.secondary.main,
                fontStyle: "bold",
                textAlign: "center",
                maxWidth: "40rem",
              }}
            >
              About
            </Typography>
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default HomePage;
