import React from "react";
// import {NavLink} from "react-router-dom";
import { NavBar } from "antd-mobile";
import OverlayVisible from "./../components/NavBarComp/DropDown.js"
import Logo from './../utils/Images/logo-transparent-notext.png'
import "../index";

const Navigation = () => {
  const styles = {
    navStyle: {
      display: "flex",
      justifyContent: "space-around",
      color: "salmon",
      fontSize: "500px",
      backgroundColor: "#4b5ba2",
      padding: `${50}px`,
      align: "left"
    },
  };

  return (
    <>
      <NavBar
        className="container nav-logo"
        style={styles.navStyle}
        mode="dark"
        fontSize="500px"
        
        leftContent={[<OverlayVisible />]}
        rightContent={<img src={Logo} alt="GatherNow logo"></img>}
      >

      </NavBar>

    </>
  );
};

export default Navigation;
