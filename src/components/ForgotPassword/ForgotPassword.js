import React, { Fragment } from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "../BasicStyles/BasicStyles";
import theme from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";
import Axios from "axios";
import { baseUrl } from "../Urls/url";

function ForgotPassword() {
  const classes = useStyles();

  const initialState = {
    email: "",
    password: "",
    password2: "",
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

  return (
    <Fragment>
      <Container maxWidth="sm" className={`${classes.mt100} ${classes.my4}`}>
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
              className={`${classes.mb4}`}
              label="confirm Password"
              variant="outlined"
              name="password2"
              value={data.password2}
              onChange={handleChange}
              fullWidth
            />

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              //   className={classes.mt4}
              // onSubmit={this.handleSubmit}
            >
              Submit&nbsp;
              <SendIcon></SendIcon>
            </Button>
          </ThemeProvider>
        </form>
      </Container>
    </Fragment>
  );
}

export default ForgotPassword;
