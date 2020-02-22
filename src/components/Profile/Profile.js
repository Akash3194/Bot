import React, { Fragment } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "../BasicStyles/BasicStyles";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import theme from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";
import Axios from "axios";
import { baseUrl } from "../Urls/url";
// import Drawer from "../Drawer/Drawer";

const Profile = () => {
  const classes = useStyles();

  const profileState = {
    firstName: "",
    lastName: "",
    comapnyName: "",
    email: "",
    phone: "",
    editingMode: false,
    loading: false,
  };

  const [profileData, setProfileData] = React.useState(profileState);

  const changeMode = () => {
    setProfileData({
      ...profileData,
      editingMode: true,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    setProfileData({
      ...profileData,
      loading: true,
    });

    const formData = new FormData();
    formData.append("firstName", profileData.firstName);
    formData.append("lastName", profileData.lastName);
    formData.append("companyName", profileData.comapnyName);
    formData.append("email", profileData.email);
    formData.append("phone", profileData.phone);

    Axios.put(baseUrl, formData).then(() => {
      setProfileData({
        ...profileData,
        loading: false,
        editingMode: false,
      });
    });
  };

  const handleChange = event => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Fragment>
      {/* <Drawer></Drawer> */}
      <Container maxWidth="md" className={`${classes.mt100} ${classes.my4}`}>
        <Box borderLeft={1} borderColor="primary.main" pt="1.5rem">
          <Box ml="5rem">
            <Typography variant="h6"> Personal Information</Typography>
            <ThemeProvider theme={theme}>
              <Box display="flex" mt="1.5rem">
                <TextField
                  label="FirstName"
                  name="firstName"
                  defaultValue="Hello World"
                  onChange={handleChange}
                  InputProps={{
                    readOnly: profileData.editingMode ? false : true,
                  }}
                  fullWidth
                />
                <TextField
                  label="LastName"
                  name="lastName"
                  defaultValue="Hello World"
                  onChange={handleChange}
                  className={`${classes.ml4}`}
                  InputProps={{
                    readOnly: profileData.editingMode ? false : true,
                  }}
                  fullWidth
                />
              </Box>
              <TextField
                label="Company name"
                name="companyName"
                onChange={handleChange}
                defaultValue="Hello World"
                InputProps={{
                  readOnly: profileData.editingMode ? false : true,
                }}
                className={`${classes.mt4}`}
                fullWidth
              />
              <TextField
                label="Email address"
                name="email"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
                className={`${classes.mt4}`}
                fullWidth
              />
              <TextField
                label="Phone number"
                name="phone"
                onChange={handleChange}
                defaultValue="Hello World"
                InputProps={{
                  readOnly: profileData.editingMode ? false : true,
                }}
                className={`${classes.mt4}`}
                fullWidth
              />
              <Button
                variant="outlined"
                color="secondary"
                className={`${classes.my4}`}
                onClick={profileData.editingMode ? handleSubmit : changeMode}
              >
                {profileData.editingMode ? (
                  <Fragment>
                    <PersonIcon></PersonIcon>&nbsp;Update Profile
                  </Fragment>
                ) : (
                  <Fragment>
                    <EditIcon></EditIcon>&nbsp;Edit Profile
                  </Fragment>
                )}
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Profile;
