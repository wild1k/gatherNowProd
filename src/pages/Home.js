
import React from 'react';
import { Link } from "react-router-dom";
import PickerView from '../components/EventViewer';
import "../index.css";
import Logo from './../utils/Images/logo-transparent-notext.png'
import ImageRow from "../components/ImageRow"

// import Space from '../components/EventCreation/TimeSelector';
// import OverlayVisible from '../components/NavBarComp/DropDown';
import "../index.css";


export default function Home() {
    return (
        <>
       <div className="container">
            <ImageRow/>
            {/* <Select/> */}
            <div>
            <p className="selectCategory">Select an event category below: <br/>OR<br/>
              Create your own Event! </p>
            <>
                <PickerView />
                {/* <Cards></Cards> */}
        
            </>
            </div>
           <div >
       
            <img className="logo" alt="gatherNow Icon" src={Logo}/>
             <p> Not already a GatheringNow Member? <Link to="/CreateAccount" >Register now!</Link></p>
            </div>
            </div>
        </>
    )
}

