import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = { data: {}, errors: {} };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).max(100).required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log('Registered');
  }

  render() {
    return (
      <div className="container mb-4">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Register</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
