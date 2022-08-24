import { Box, Paper, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ZJMLogo from "../ZJMLogo";
import Image from "../../images/SmallSky.png";
import "./HomePage.css";
import OptionsCard from "./OptionsCard";

/**
 * Functional Component for the home page of the webside
 * @returns JSX of the Home Page
 */
function HomePage(props: { welcomeMessage: string }) {
  const scollCompletion = 700;
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
      <div className="home-page-container">
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundPosition: `50% ${Math.min(
              100,
              100 - (100 * (scollCompletion - scrollPosition)) / scollCompletion
            )}%`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "4rem",
            paddingBottom: "4rem",
            margin: "0 0 3rem 0",
          }}
        >
          <ZJMLogo height="fit-content(24rem)" width="auto" auto={true} />

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
              data-aos="flip-left"
              className="drawn-profile-pic"
              src={require("../../images/PFP.png")}
              // src="../../../images/PFP.png"
              alt="Stylized Profile of Zijian (Richard) Meng"
              style={{ marginLeft: "4rem", marginRight: "4rem" }}
            />
            <Paper
              data-aos="flip-right"
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
      <section className="quick-options">
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
          data-aos="fade-up"
          data-aos-duration="1500"
          sx={{
            marginTop: "3rem",
            display: "flex",
            maxWidth: "85vw",
            overflowX: "auto",
            paddingBottom: "1rem",
          }}
        >
          <OptionsCard
            image={require("../../images/engineeringBG.jpg")}
            title="About"
            description="Summmary, interests, skills. Continue below."
          />
          <OptionsCard
            image={require("../../images/engineeringBG.jpg")}
            title="Engineering Experience"
            description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
          />
          <OptionsCard
            image={require("../../images/engineeringBG.jpg")}
            title="Engineering Experience"
            description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
          />
          <OptionsCard
            image={require("../../images/engineeringBG.jpg")}
            title="Engineering Experience"
            description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
          />
          <OptionsCard
            image={require("../../images/engineeringBG.jpg")}
            title="Engineering Experience"
            description="Mechanical engineering work experince. Tasks, skills, project, overview, and testimonials."
          />
        </Box>
      </section>
    </>
  );
}

export default HomePage;
