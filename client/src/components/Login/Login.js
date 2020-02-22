import React, { Fragment } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "../BasicStyles/BasicStyles";
import theme from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { baseUrl } from "../Urls/url";
import Axios from "axios";

const Login = props => {
  const classes = useStyles();

  const initialState = {
    email: "",
    password: "",
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
            Login Page
          </Typography>
          <form action="" onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
              <TextField
                className={`${classes.mb4}`}
                label="Enter Email"
                variant="outlined"
                name="email"
                // value={this.state.username}
                onChange={handleChange}
                fullWidth
                value={data.email}
              />
              <TextField
                type="password"
                className={`${classes.mb4}`}
                label="Enter Password"
                variant="outlined"
                name="password"
                // value={this.state.password}
                onChange={handleChange}
                value={data.password}
                fullWidth
              />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                // onSubmit={this.handleSubmit}
              >
                Submit&nbsp;
                <SendIcon></SendIcon>
              </Button>
              <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.ml4}
                >
                  Forgot Password&nbsp; <VpnKeyIcon></VpnKeyIcon>
                </Button>
              </Link>
            </ThemeProvider>
          </form>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Login;
