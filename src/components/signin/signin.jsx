import React, { Component } from "react";

class signin extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  submitHandler = event => {
    event.preventDefault();
    this.setState = { email: "", password: "" };
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input name="email" type="email" value={this.state.email} required />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <label>password</label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default signin;
