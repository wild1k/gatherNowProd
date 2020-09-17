import React from 'react';
import Food from './../utils/Images/food.jpg'
import Kayaking from './../utils/Images/sports-crowd.jpg'
import Bonfire from './../utils/Images/beach-bonfire.jpg'
import HorseRiding from './../utils/Images/horse-riding.jpg'
import Drinks from './../utils/Images/drinks.jpg'

const ImageRow = () =>{
    return (
        <div className="bottomMargin">
        <img className="main-img" alt="kayaking" src={Kayaking}/>
        <img className="main-img" alt="food" src={Food}/>
        <img className="main-img" alt="bonfire" src={Bonfire}/>
        <img className="main-img" alt="drinks" src={Drinks}/>
        <img className="main-img" alt="horseback riding" src={HorseRiding}/>
        </div>
    );
    };
    export default ImageRow;