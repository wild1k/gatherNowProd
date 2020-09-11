
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
        
        <div>
            <ImageRow/>
            <p id="header-team">Welcome to GatherNow</p>
            {/* <Select/> */}

            <p className="selectCategory">Select an event category below to get started:
                <PickerView />
                {/* <Cards></Cards> */}
            <button/>
                Remember to wear a mask. Save lives.
            </p>
            <img class="logo" alt="" src={Logo}/>
            
        </div>
    );
}