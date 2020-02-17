import React, { Fragment } from "react";
import { Button, Box, TextField } from "@material-ui/core";
import themeForButtonFieldRadius from "./../Themes/themeForButtonFieldRadius";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "../BasicStyles/BasicStyles";

import CloseIcon from "@material-ui/icons/Close";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SendIcon from "@material-ui/icons/Send";
const Bot = () => {
  const classes = useStyles();

  const initialState = {
    isDisplayed: false,
  };

  const [data, setData] = React.useState(initialState);

  const chatContainerStyleFalse = {
    animation: "chatContainerHide 0.5s",
    animationFillMode: "forwards",
  };

  const chatContainerStyleTrue = {
    display: "block",
    animation: "chatConatinerShow 0.5s",
  };

  const mainBtnStyleTrue = {
    hide: {
      display: "flex",
    },
    show: {
      display: "none",
    },
  };

  const mainBtnStyleFalse = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  };

  const handleDemoClick = () => {
    setData({
      ...data,
      isDisplayed: !data.isDisplayed,
    });
  };
  return (
    <Fragment>
      <div>
        {/* Code for bot messages starts */}
        <div
          className="chat-container "
          style={
            data.isDisplayed ? chatContainerStyleTrue : chatContainerStyleFalse
          }
        >
          <div className="d-flex justify-content-end sticky-top close-btn">
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          {/* Main container to hold the messages */}
          <Box className="msg-container">
            {/* Div for the bot msg */}
            {/* <div id="msg-container-bot" class="d-flex justify-content-start">
    <div class="msg-bot mt-4">
      hellosssssssssssssssssssssssssssssssssssssssssssssssssssss
    </div>
  </div> */}
            {/* Div for the user msg */}
            {/* <div id="msg-container-user" class="d-flex justify-content-end">
    <div class="msg-user bg-primary  mt-4 ">
      hello
    </div>
  </div> */}
            {/* Test */}
            {/* <div
    id="msg-container-bot"
    class="d-flex justify-content-start  flex-column"
  >
    <div class="msg-bot1 mt-4">data[0].text</div>
    <div
      class="text-primary text-center server-btn-response response-button"
    >
      jfhsj
    </div>
    <div
      class="text-primary text-center server-btn-response-last response-button"
    >
      hello
    </div>
  </div> */}
            <Box
              id="msg-container-bot"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Box className={`msg-bot1 ${classes.mt4}`}>
                which pizza would you like to order?
              </Box>
              <Box
                className={`text-primary ${classes.textCenter} server-btn-response response-button2`}
              >
                Pizza bot
              </Box>
              <Box
                className={`text-primary ${classes.textCenter} server-btn-response-last response-button2`}
              >
                FAQ
              </Box>
            </Box>
          </Box>
          {/* Div for imput and send button */}
          <Box className={`msg-send`} display="flex">
            <TextField
              variant="outlined"
              color="primary"
              label="Enter message"
              fullWidth
            />
            <Button variant="contained" color="secondary">
              <SendIcon></SendIcon>
            </Button>
          </Box>
        </div>
        {/* Button to show and hide the chat bot ui */}
        <ThemeProvider theme={themeForButtonFieldRadius}>
          <Button
            variant="contained"
            color="primary"
            id="mainBtn"
            onClick={handleDemoClick}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={
                data.isDisplayed
                  ? mainBtnStyleTrue.hide
                  : mainBtnStyleFalse.hide
              }
            >
              <CloseIcon></CloseIcon>

              {/* <span id="close">Close</span> */}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={
                data.isDisplayed
                  ? mainBtnStyleTrue.show
                  : mainBtnStyleFalse.show
              }
            >
              <ChatBubbleIcon></ChatBubbleIcon>&nbsp;
              {/* <span id="demo">Demo</span> */}
            </Box>
          </Button>
        </ThemeProvider>
        {/* <button id="mainBtn" className="btn btn-primary"></button> */}
        {/* Code for bot messages ends */}
      </div>
    </Fragment>
  );
};

export default Bot;
