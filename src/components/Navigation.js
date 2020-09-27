import React, {useState, useEffect} from "react";
// import {NavLink} from "react-router-dom";
import { NavBar } from "antd-mobile";
import OverlayVisible from "./NavBarComp/DropDown.js"
import Logo from './../utils/Images/logo-transparent-notext.png'
import "../index";
import API from '../utils/API';
// import UserInfo from "./UserProfile/UserProfile.js";
import MyAccount from '../pages/MyAccount';

import LogInForm from '../components/LogInForm';

import {Link} from "react-router-dom"





export default function Navigation(props) {
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
  const [currentUser, setCurrentUser] = useState()


  useEffect(() => {
    API.getCurrentUser().then(res => {
      console.log(res.data);
      setCurrentUser(res.data.user);
    })
  }, [])
  return (
  <>
     
          <span> 
      <NavBar
   
        className="container nav-logo Navigation"
        style={styles.navStyle}
        mode="dark"
        fontSize="500px"
        leftContent={<OverlayVisible><span>Welcome, {props.first_name}</span></OverlayVisible>}
        rightContent={<img src={Logo} alt="GatherNow logo"></img>}
        // textcontent={<LoginForm handleSubmit={props.loginSubmit} onChange={props.loginInputChange} value={props.loginFormData.email}/>}
        content={<Link to="/LogOut" onClick={props.logout}>Logout</Link>}
      >
      
 {props.currentUser ?<button onClick={()=> setCurrentUser(<MyAccount currentUser={currentUser} to="/MyAccount"/>)}>Create Event</button>:null}
 <LogInForm handleSubmit = {props.loginSubmit} handleChange={props.inputChange} formData={props.logInFormData}/>
      </NavBar>
   
      </span>
  
 </>
   
  )
};


