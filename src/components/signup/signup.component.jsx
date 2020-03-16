import React, { Component } from "react";
import FormInput from "../forminput/form-input.component";
import CustomButton from "../custombutton/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      displayName: "",
      confirmPassword: ""
    };
  }
  submitHandler = async event => {
    event.preventDefault();
    const { email, password, displayName, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        email: "",
        password: "",
        displayName: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, displayName, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            label="Display Name"
            value={displayName}
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="email"
            value={email}
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="password"
            value={password}
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={confirmPassword}
            label="confirmPassword"
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
