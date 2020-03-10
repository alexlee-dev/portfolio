import React, { Fragment } from "react";
import { Box, Typography } from "@material-ui/core";
import heroStyles from "./hero.module.scss";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Social from "./social";
import PalmTriangles50 from "../images/palm-triangles-50.svg";
import PalmFull from "../images/palm.jpg";

const Hero = () => {
  const smaller = useMediaQuery("(max-width:820px)");
  const smallest = useMediaQuery("(max-width:575px)");
  const large = useMediaQuery("(min-width:1024px)");

  return (
    <Box className={heroStyles.container}>
      {large && (
        <Fragment>
          <img
            alt="Palm Tree"
            className={heroStyles.bottom}
            src={PalmTriangles50}
          />
          <img alt="Palm Tree" className={heroStyles.top} src={PalmFull} />
        </Fragment>
      )}

      <Box
        data-sal="fade"
        data-sal-duration="1500"
        data-sal-easing="ease"
        className={heroStyles.typographyContainer}
      >
        <Typography
          className={
            smallest
              ? heroStyles.smallest
              : smaller
              ? heroStyles.smaller
              : undefined
          }
          variant="h4"
        >
          HELLO, WORLD.
        </Typography>
        <Typography
          className={
            smallest
              ? heroStyles.smallest
              : smaller
              ? heroStyles.smaller
              : undefined
          }
          variant="h1"
        >
          I'm Alex Lee
        </Typography>
        <Typography
          className={
            smallest
              ? heroStyles.smallest
              : smaller
              ? heroStyles.smaller
              : undefined
          }
          variant="h3"
        >
          FULLSTACK APPLICATION DEVELOPER
        </Typography>
      </Box>
      <Social />
    </Box>
  );
};

export default Hero;
