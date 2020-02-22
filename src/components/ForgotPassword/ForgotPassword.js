import React, { Fragment } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "../BasicStyles/BasicStyles";
import theme from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";
import SecurityIcon from "@material-ui/icons/Security";
import Axios from "axios";
import { baseUrl } from "../Urls/url";

function ForgotPassword() {
  const classes = useStyles();

  const initialState = {
    email: "",
    password: "",
    password2: "",
    otp: "",
    isOtpDisplayed: false,
    loading: false,
  };

  const [data, setData] = React.useState(initialState);

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setData({
      ...data,
      loading: true,
    });

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    Axios.post(baseUrl, formData)
      .then(user => {
        setData({
          ...data,
          loading: false,
          isOtpDisplayed: true,
        });
      })
      .catch(err => {});
  };

  const handleOtpValidation = () => {
    setData({
      ...data,
      loading: true,
    });

    const formData = new FormData();
    formData.append("otp", data.otp);

    Axios.post(baseUrl, formData)
      .then(otp => {
        setData({
          ...data,
          isOtpDisplayed: false,
        });
      })
      .catch(err => {});
  };

  return (
    <Fragment>
      <Container maxWidth="sm" className={`${classes.mt100} ${classes.my4}`}>
        <Box
          borderColor="primary.main"
          border={1}
          px="3.5rem"
          pb="2rem"
          boxShadow={3}
        >
          <Typography variant="h4" className={`${classes.bold} ${classes.my4}`}>
            Forgot Password Page
          </Typography>

          <form action="" onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
              <TextField
                className={`${classes.mb4}`}
                label="Enter Email"
                variant="outlined"
                name="email"
                value={data.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                type="password"
                className={`${classes.mb4}`}
                label="Enter Password"
                variant="outlined"
                name="password"
                value={data.password}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                type="password"
                // className={`${classes.mb4}`}
                label="Confirm Password"
                variant="outlined"
                name="password2"
                value={data.password2}
                onChange={handleChange}
                fullWidth
              />
              {data.password === data.password2 ? (
                ""
              ) : (
                <Box color="secondary.main" mt="0.5rem">
                  Passwords are not same
                </Box>
              )}
              {data.isOtpDisplayed ? (
                <TextField
                  type="text"
                  className={`${classes.mb4} ${classes.mt4}`}
                  label="Enter otp"
                  variant="outlined"
                  name="otp"
                  value={data.otp}
                  onChange={handleChange}
                  fullWidth
                />
              ) : (
                ""
              )}

              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={data.isOtpDisplayed ? "" : classes.mt4}
                onSubmit={handleSubmit}
              >
                Submit&nbsp;
                <SendIcon></SendIcon>
              </Button>
              {data.isOtpDisplayed ? (
                <Button
                  variant="outlined"
                  color="primary"
                  className={`${classes.ml4}`}
                  onClick={handleOtpValidation}
                >
                  Validate Otp{"   "}
                  <SecurityIcon></SecurityIcon>
                </Button>
              ) : (
                ""
              )}
            </ThemeProvider>
          </form>
        </Box>
      </Container>
    </Fragment>
  );
}

export default ForgotPassword;
