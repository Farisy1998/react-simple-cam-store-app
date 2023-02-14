import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  sate = {
    email: "",
    password: "",
  };

  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  };

  handleLogin = (event) => {
    event.preventDefault();
    console.log("logged in.");
  };

  handleChange = ({ currentTarget: input }) => {
    console.log(input.value);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Login</h1>
            <form action="">
              <Input
                name="email"
                label="Email"
                type="email"
                onChange={this.handleChange}
              />
              <Input name="password" label="Password" type="password" />
              <button
                className="btn btn-primary"
                onClick={(event) => this.handleLogin(event)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
