import React from "react";
import Signin from "../../components/signin/signin";
import SignUp from "../../components/signup/signup.component";
import "./sign-in-and-sign-up.styles.scss";

const signinsignout = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <SignUp />
  </div>
);
export default signinsignout;
