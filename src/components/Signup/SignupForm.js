import React, { Fragment } from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "../BasicStyles/BasicStyles";
import theme from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="sm" className={`${classes.mt100} ${classes.my4}`}>
        <Typography variant="h4" className={`${classes.bold} ${classes.my4}`}>
          Signup Page
        </Typography>

        <form action="">
          <ThemeProvider theme={theme}>
            <TextField
              className={`${classes.mb4}`}
              label="Enter Username"
              variant="outlined"
              name="username"
              // value={this.state.username}
              // onChange={this.handleChange}
              fullWidth
            />
            <TextField
              type="password"
              className={`${classes.mb4}`}
              label="Enter Password"
              variant="outlined"
              name="password"
              // value={this.state.password}
              // onChange={this.handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className="p-2"
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
};

export default LoginForm;
