
import React from 'react';
import PickerView from '../components/EventViewer';
import "../index.css";
import Logo from './../utils/Images/logo-transparent-notext.png'
import ImageRow from "../components/ImageRow"

// import Space from '../components/EventCreation/TimeSelector';
// import OverlayVisible from '../components/NavBarComp/DropDown';
import "../index";


export default function Home() {
    return (
        <>
         <p id="header-team">Welcome to GatherNow</p>
            <ImageRow/>
            {/* <Select/> */}

            <p className="selectCategory">Select an event category below to get started: </p>
                <PickerView />
                {/* <Cards></Cards> */}
            <button/>
               <p> Remember to wear a mask. Save lives.</p>
           <>
            <img class="logo" alt="" src={Logo}/>
            </>
        </>
    )
}

