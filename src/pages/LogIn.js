import React from "react";
import LogInForm from "../components/LogInForm";
import ImageRow from "../components/ImageRow"


import '../index';

export default function LogIn() {
  return (
    <>
      <ImageRow/>
      <p id="header-team">Sign In</p>
      <LogInForm />

    </>
  )
}