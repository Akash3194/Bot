import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Bot from "./components/Bot/Bot";
import Profile from "./components/Profile/Profile";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Drawer from "./components/Drawer/Drawer";
import ChatBots from "./components/ChatBots/ChatBots";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path={/^\/*[a-zA-Z0-9]*(?!([^/].+))$/} component={Navbar} />
        <Route path={/^\/*[a-zA-Z0-9]*(?!([^/].+))$/} component={Bot} />
        <Route path="/:userId/drawer" component={Drawer}></Route>
        <Route path="/:userId/drawer/userProfile" component={Profile} />
        <Route path="/:userId/drawer/myChatbots" component={ChatBots} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/" component={Footer} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
      </Router>
    );
  }
}

export default App;
