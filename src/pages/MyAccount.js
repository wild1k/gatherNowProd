import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import EventCard from "./../components/UserProfile/EventCard";
import "../index";
import API from "../utils/API"
import UserInfo from "../components/UserProfile/UserProfile";
import ImageRow from "../components/ImageRow";
// import EventCard from "../components/UserProfile/EventCard";



export default function MyAccount(props) {
  const [currentUser, setCurrentUser] = useState()


  useEffect(() => {
    API.getCurrentUser().then(res => {
      console.log(res.data);
      setCurrentUser(res.data.user);
    })
  }, [])

   const [userEvent, setUserEvent] = useState([]);

 
  useEffect(() => {
  API.getUserEvent().then((res) => {
      console.log(res.data);
      setUserEvent(res.data);
    });
  }, [])


  return (
    <>
  
  <ImageRow/>
  <div className="MyAccount">
    
  <div className="center">

       <p id="header-team">Here are your events coming up:</p>

 <UserInfo currentUser={currentUser} />
 <EventCard userEvent={userEvent}/>
      {/* <Button /> */}



</div>

</div> 
    </>
  );
}


