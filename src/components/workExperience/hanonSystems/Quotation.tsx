import { Typography, useTheme } from "@mui/material";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Quotation.css";

type QuotationProps = {
  quotation: string;
};

function Quotation(props: QuotationProps) {
  const theme = useTheme();

  React.useEffect(() => {
    AOS.init({ duration: 1300, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="quotation-container" data-aos="fade-down">
      <svg
        className="quotation-flair"
        viewBox="0 0 167 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.356 16.021C85.4515 16.0071 85.5485 16.0071 85.644 16.021L123.359 21.5104C124.587 21.6891 124.455 23.5 123.215 23.5H47.7848C46.5445 23.5 46.4134 21.6891 47.6408 21.5104L85.356 16.021Z"
          fill={theme.palette.secondary.main}
        />
        <line
          x1="23"
          y1="27.75"
          x2="145"
          y2="27.75"
          stroke={theme.palette.secondary.main}
          strokeWidth="2.5"
        />
        <line
          x1="13"
          y1="32.75"
          x2="155"
          y2="32.75"
          stroke={theme.palette.secondary.main}
          strokeWidth="2.5"
        />
      </svg>
      <Typography
        variant="h6"
        width="90%"
        maxWidth="30rem"
        textAlign="center"
        color="primary.main"
      >
        {props.quotation}
      </Typography>
      <svg
        className="quotation-flair upside-down"
        viewBox="0 0 167 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.356 16.021C85.4515 16.0071 85.5485 16.0071 85.644 16.021L123.359 21.5104C124.587 21.6891 124.455 23.5 123.215 23.5H47.7848C46.5445 23.5 46.4134 21.6891 47.6408 21.5104L85.356 16.021Z"
          fill={theme.palette.secondary.main}
        />
        <line
          x1="23"
          y1="27.75"
          x2="145"
          y2="27.75"
          stroke={theme.palette.secondary.main}
          strokeWidth="2.5"
        />
        <line
          x1="13"
          y1="32.75"
          x2="155"
          y2="32.75"
          stroke={theme.palette.secondary.main}
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

export default Quotation;
