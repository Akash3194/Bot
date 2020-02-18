import React, { Fragment } from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "../BasicStyles/BasicStyles";
import theme from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Login = () => {
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

  return (
    <Fragment>
      <Container maxWidth="sm" className={`${classes.mt100} ${classes.my4}`}>
        <Typography variant="h4" className={`${classes.bold} ${classes.my4}`}>
          Login Page
        </Typography>

        <form action="">
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
            <Button
              variant="outlined"
              color="secondary"
              className={classes.ml4}
            >
              Forgot Password&nbsp; <VpnKeyIcon></VpnKeyIcon>
            </Button>
          </ThemeProvider>
        </form>
      </Container>
    </Fragment>
  );
};

export default Login;
