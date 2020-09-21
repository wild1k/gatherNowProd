import React, { useState, useEffect } from "react";

import EventCard from "./../components/UserProfile/EventCard";
import "../index";
import API from "../utils/API"
import UserInfo from "../components/UserProfile/UserProfile";
import ImageRow from "../components/ImageRow"






function MyAccount() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    API.getCurrentUser().then((res) => {
      // console.log(res.data.user);
      setCurrentUser(res.data.user);
    });
  }, []);

  const [userEvent, setUserEvent] = useState([]);
  useEffect(() => {
    API.getUserEvent().then((res) => {
      setUserEvent(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
  <ImageRow/>
  <div className="center">

          {currentUser ? <p id="header-team">Here are your events coming up:</p> : null}

      <UserInfo currentUser={currentUser} />
      {/* <Button /> */}


 {userEvent ?  <EventCard userEvent={userEvent}/> : null}
 

</div>
    </>
  );
}

export default MyAccount;
