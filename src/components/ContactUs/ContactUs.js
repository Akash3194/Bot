import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

const ContactUs = ({
  noPadding,
  contactUs,
  contactUsContainerPadding,
  contactUsFormPadding,
  mb4,
  contacts,
  theme,
}) => {
  return (
    <Fragment>
      <Container
        maxWidth="xl"
        className={`${noPadding} ${contactUs}`}
        id="contactus"
      >
        <Grid container className={`${contactUsContainerPadding}`}>
          <Grid item sm={6}>
            <Typography variant="h4">Send us a Message</Typography>
            <form action="" className={`${contactUsFormPadding}`}>
              <ThemeProvider theme={theme}>
                <TextField
                  label="Enter your name"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  className={mb4}
                />

                <TextField
                  label="Enter your email"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  type="email"
                  className={mb4}
                />

                <TextField
                  label="Enter your phone number"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  type="number"
                  className={mb4}
                />
                <TextField
                  label="Enter your message"
                  multiline
                  rows="4"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  className={mb4}
                />
                <Button variant="outlined" fullWidth color="secondary">
                  Send&nbsp;
                  <SendIcon />
                </Button>
              </ThemeProvider>
            </form>
          </Grid>
          <Grid item sm={6} style={{ paddingLeft: "100px" }}>
            <Typography variant="h4">Contact details</Typography>
            <Box className={contactUsFormPadding}>
              <Box className={`${contacts} ${mb4}`}>
                <PhoneAndroidIcon />
                &nbsp;&nbsp;&nbsp;8708979667
              </Box>
              <Box className={`${contacts} ${mb4}`}>
                <EmailIcon />
                &nbsp;&nbsp;&nbsp;xyz@gmail.com
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default ContactUs;
