import React from 'react';
import Food from './../utils/Images/food.jpg'
import Kayaking from './../utils/Images/sports-crowd.jpg'
import Bonfire from './../utils/Images/beach-bonfire.jpg'
import HorseRiding from './../utils/Images/horse-riding.jpg'
import Drinks from './../utils/Images/drinks.jpg'

const ImageRow = () =>{
    return (
        <div>
        <img class="main-img" alt="" src={Kayaking}/>
        <img class="main-img" alt="" src={Food}/>
        <img class="main-img" alt="" src={Bonfire}/>
        <img class="main-img" alt="" src={Drinks}/>
        <img class="main-img" alt="" src={HorseRiding}/>
        </div>
    );
    };
    export default ImageRow;