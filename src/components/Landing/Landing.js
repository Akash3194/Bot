import React, { Fragment } from "react";
import { createMuiTheme } from "@material-ui/core/styles";

import About from "../About/About";
import HowItWorks from "../HowItWorks/HowItWorks";
import Home from "../Home/Home";
import ContactUs from "../ContactUs/ContactUs";
import useStyles from "../BasicStyles/BasicStyles";
import Bot from "../Bot/Bot";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiInputBase: {
      // Name of the rule
      input: {
        // Some CSS
        color: "white",
      },
    },
    MuiFormLabel: {
      root: {
        color: "white",
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "white",
        borderRadius: "0",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "0",
      },
    },
  },
});

const Landing = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* For Home Section */}
      <Home
        boxSection={classes.boxSection}
        center={classes.center}
        imgFluid={classes.imgFluid}
        heightFluid={classes.heightFluid}
      />

      {/* For About section */}

      <About
        center={classes.center}
        boxSection={classes.boxSection}
        my4={classes.my4}
        heightFluid={classes.heightFluid}
        root={classes.root}
        zeroRadius={classes.zeroRadius}
        pt4={classes.pt4}
        textCenter={classes.textCenter}
        imgFluid={classes.imgFluid}
        cardItem={classes.cardItem}
      />

      {/* For how it works section */}

      <HowItWorks
        boxSection={classes.boxSection}
        marginStep={classes.marginStep}
        center={classes.center}
        step={classes.step}
        chatImg={classes.chatImg}
        widthFluid={classes.widthFluid}
      />

      {/* For Contact Us Section */}
      <ContactUs
        noPadding={classes.noPadding}
        contactUs={classes.contactUs}
        contactUsContainerPadding={classes.contactUsContainerPadding}
        contactUsFormPadding={classes.contactUsFormPadding}
        mb4={classes.mb4}
        contacts={classes.contacts}
        theme={theme}
      />
    </Fragment>
  );
};

export default Landing;
