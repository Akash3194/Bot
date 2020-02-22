import React, { Fragment } from "react";
import { Box, Grid } from "@material-ui/core";
import botImage from "./../../images/main-bot.webp";
const Home = ({ boxSection, center, imgFluid, heightFluid }) => {
  return (
    <Fragment>
      <Grid container className={boxSection} id="home">
        <Grid item sm={6}>
          <Box alignItems="center" className={center}>
            <img src={botImage} className={imgFluid} alt="" />
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box className={`${heightFluid} ${center}`} alignItems="center">
            lew
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
