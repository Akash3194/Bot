import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import AdbIcon from "@material-ui/icons/Adb";
import { Avatar, Box } from "@material-ui/core";
import basicStyles from "../BasicStyles/BasicStyles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const classes2 = basicStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={classes.root}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Box display="flex" justifyContent="center" ml={2}>
          <List>
            <ListItem>
              <ListItemIcon>
                {open ? (
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className={`${classes2.profileImage} `}
                  />
                ) : (
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                )}
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
        <Divider />
        <List>
          <Link
            to={`/hello/drawer/userProfile`}
            className={classes2.aRemoveDefault}
          >
            <ListItem button>
              <ListItemIcon>
                <PersonIcon></PersonIcon>
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
          </Link>
          <Divider />
          <Link
            to={`/hello/drawer/myChatbots`}
            className={classes2.aRemoveDefault}
          >
            <ListItem button>
              <ListItemIcon>
                <AdbIcon></AdbIcon>
              </ListItemIcon>
              <ListItemText primary="My Chat Bots" />
            </ListItem>
          </Link>
          <Divider />
          <ListItem button className={classes2.aRemoveDefault}>
            <ListItemIcon>
              <ExitToAppIcon></ExitToAppIcon>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </div>
  );
}
