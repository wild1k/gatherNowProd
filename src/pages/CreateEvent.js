import React from "react";
// import SwitchablePicker from '../components/EventCreation/TimeSelector';
import EventForm from "../components/EventCreation/EventForm";
import '../index.css';
import ImageRow from "../components/ImageRow";
// import OverlayVisible from '../components/NavBarComp/DropDown';


export default function CreateEvent() {
  return (
    <div>
      <ImageRow/>
      <p id="header-team">Create an event</p>;
      <EventForm />
    </div>
  )
}