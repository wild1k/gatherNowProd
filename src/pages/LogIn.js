import React from "react";
import LogInForm from "../components/LogInForm";
import ImageRow from "../components/ImageRow"
// import OverlayVisible from '../components/NavBarComp/DropDown';

import '../index';

export default function LogIn() {
  return (
    <div>
      <ImageRow/>
      <p id="header-team">Sign In</p>
      <LogInForm />

    </div>
  )
}