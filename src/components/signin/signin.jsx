import React, { Component } from "react";
import FormInput from "../forminput/form-input.component";
import CustomButton from '../custombutton/custom-button.component';

import './signin.scss';

class signin extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  submitHandler = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <form onSubmit={this.submitHandler}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default signin;
