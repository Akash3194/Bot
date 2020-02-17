import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import {
  IconButton,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 0.56,
    marginLeft: "10px",
  },
  nav: {
    color: "black !important",
    backgroundColor: "White",
  },
  navItem: {
    textAlign: "center",
    "&:hover": {
      color: "blue",
      cursor: "pointer",
      boxShadow: "inset 0 -2px 0 blue",
    },
  },
  aRemoveDefault: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "blue",
      cursor: "pointer",
      // boxShadow: "inset 0 -2px 0 blue",
    },
  },
  textCenter: {
    textAlign: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    //   Navbar starts
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          {/* <Container maxwidth="lg">
            <Typography variant="h6">Home</Typography>
          </Container> */}
          <Grid container spacing={3}>
            <Grid item xs={5} sm={5} md={7}>
              <Box display="flex" alignItems="center">
                <Box display={{ xs: "inline", sm: "none" }}>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    display="none"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Typography variant="h6" className={classes.title}>
                  <Link to="/" className={classes.aRemoveDefault}>
                    CHATEASY
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={false} sm={"auto"} md={1}>
              <a href="#home" className={classes.aRemoveDefault}>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Typography
                    variant="subtitle1"
                    className={classes.textCenter}
                  >
                    Home
                  </Typography>
                </Box>
              </a>
            </Grid>
            <Grid item xs={false} sm={"auto"} md={1}>
              <a href="#about" className={classes.aRemoveDefault}>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Typography
                    variant="subtitle1"
                    className={classes.textCenter}
                  >
                    About
                  </Typography>
                </Box>
              </a>
            </Grid>
            <Grid item xs={false} sm={"auto"}>
              <a href="#howItWorks" className={classes.aRemoveDefault}>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Typography
                    variant="subtitle1"
                    className={classes.textCenter}
                  >
                    How it works
                  </Typography>
                </Box>
              </a>
            </Grid>
            <Grid item xs={false} sm={"auto"}>
              <a href="#contactus" className={classes.aRemoveDefault}>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Typography
                    variant="subtitle1"
                    className={classes.textCenter}
                  >
                    Contact Us
                  </Typography>
                </Box>
              </a>
            </Grid>
            <Grid item xs={false} sm={"auto"}>
              <Link to="/login" className={classes.aRemoveDefault}>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Typography
                    variant="subtitle1"
                    className={classes.textCenter}
                  >
                    Login
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={false} sm={"auto"}>
              <Link to="/signup" className={classes.aRemoveDefault}>
                <Box display={{ xs: "none", sm: "block" }}>
                  <Typography
                    variant="subtitle1"
                    className={classes.textCenter}
                  >
                    Signup
                  </Typography>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    // Navbar ends
  );
};

export default Navbar;
