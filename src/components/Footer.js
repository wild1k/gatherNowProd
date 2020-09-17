import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content-inside">
        &#169; GatherNow by Impromptu Adventures
        <br />
        #SaveLives | 2020 | #WearAMask
        <br />
        <NavLink to="/DevTeam"> Development Team</NavLink>
      </div>
    </div>
  );
};

export default Footer;
