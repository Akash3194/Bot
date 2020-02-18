import React, { Fragment } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "../BasicStyles/BasicStyles";
import theme from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";

const Signup = () => {
  const classes = useStyles();

  const intitialState = {
    email: "",
    password: "",
    loading: false,
    checked: false,
  };

  const [data, setData] = React.useState(intitialState);

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.checked,
    });
  };
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
              label="Enter Email"
              variant="outlined"
              name="email"
              value={data.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              type="password"
              // className={`${classes.mb4}`}
              label="Enter Password"
              variant="outlined"
              name="password"
              value={data.password}
              onChange={handleChange}
              fullWidth
            />
            <Box width="100%" my="1rem">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.checked}
                    onChange={handleCheckboxChange}
                    value="checkedB"
                    color="primary"
                    name="checked"
                  />
                }
                label="Keep me signed in"
              />
            </Box>
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

export default Signup;
