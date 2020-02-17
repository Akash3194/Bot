import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Landing} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default App;
