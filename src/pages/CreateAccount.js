import React from "react";
import "../index.css";
import SignUpForm from "../components/SignUpForm";
import ImageRow from "../components/ImageRow";


export default function CreateAccount() {
  return (
    <div>
      <ImageRow/>
      <p id="header-team">Create your account</p>
      <SignUpForm />
    </div>

  )
}
