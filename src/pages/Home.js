import React from "react";
import { Link } from "react-router-dom";
import PickerView from "../components/EventViewer";
import "../index.css";

import ImageRow from "../components/ImageRow";

// import Space from '../components/EventCreation/TimeSelector';
// import OverlayVisible from '../components/NavBarComp/DropDown';
import "../index.css";
import EventCard from "../components/UserProfile/EventCard";

export default function Home() {
  return (
    <>
      <div className="container">
        <ImageRow />
        {/* <Select/> */}
        <div>
          <p className="selectCategory">
            Select an event category below: <br />
            OR
            <br />
            Create your own Event!{" "}
          </p>
          <>
            <PickerView />
          </>
        </div>
        <div>
          <br />
          <p>
            {" "}
            Not already a Member? <Link to="/CreateAccount">Register now!</Link>
          </p>
          <EventCard />
        </div>
      </div>
    </>
  );
}
