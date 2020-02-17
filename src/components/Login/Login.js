import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return <LoginForm></LoginForm>;
  }
}

export default Login;
