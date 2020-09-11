import React from "react";
import { NavLink, Link } from "react-router-dom";


import "../index";

const NavLink = () => {
  const styles = {
    navStyle: {
      display: "flex",
      justifyContent: "space-around",
      color: "White",
      backgroundColor: "blueviolet",
      padding: `${50}px`,
    },
  };

  return (
    <navlink>
      <Link to="/CreateAccount">CreateAccount</Link>,
      <Link to="/Home">Home</Link>,
      <Link to="/LogIn">LogIn</Link>,
      <Link to="/MyAccount">MyAccount</Link>,
      <Link to="/CreateEvent">Create New Event</Link>,
    </navlink>
  );
};

export default NavLink;