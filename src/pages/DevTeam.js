
import React from 'react';
import "../index.css";
import Logo from './../utils/Images/logo-transparent-notext.png'
import ImageRow from "../components/ImageRow"
import CassPhoto from "./../utils/Images/CassHead.jpg"
import EnriquePhoto from "./../utils/Images/EnriqueHead.jpg"
import AnthonyPhoto from "./../utils/Images/AnthonyHead.jpg"
import MikePhoto from "./../utils/Images/Mikeheadshot.jpg"
import HannibalPhoto from "./../utils/Images/HWhead.png"

import "../index";


export default function DevTeam() {
    return (
        
        <div>
            <ImageRow/>
            <p id="header-team">GatherNow Team</p>
            <img class="logo" alt="" src={Logo}/>
            <p> Here is the GatherNow development team:
            </p>
            <h1>Cassandra Chamberlain</h1>
            <p id="bio-text">View Cassandra's portfolio here ...</p>
            <img class="headshot" alt="" src={CassPhoto}/>
            <h1>Enrique Garcia</h1>
            <p id="bio-text">View Enrique's's portfolio here ...</p>
            <img class="headshot" alt="" src={EnriquePhoto}/>
            <h1>Anthony Perez</h1>
            <p id="bio-text">View Anthony's portfolio here ...</p>
            <img class="headshot" alt="" src={AnthonyPhoto}/>
            <h1>Mike Shenk</h1>
            <p id="bio-text">View Mike's portfolio here ...</p>
            <img class="headshot" alt="" src={MikePhoto}/>
            <h1>Hannibal Wyman</h1>
            <p id="bio-text">View Hannibal's portfolio here ...</p>
            <img class="headshot" alt="" src={HannibalPhoto}/>

            
        </div>
    );
};