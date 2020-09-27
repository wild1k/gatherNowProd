import React, { useState, useEffect } from "react";
// import {useHistory} from "react-router-dom";
// import EventCard from "./../components/UserProfile/EventCard";
import "../index";
import API from "../utils/API"
import UserInfo from "../components/UserProfile/UserProfile";
import ImageRow from "../components/ImageRow";



export default function MyAccount(props) {
  const [currentUser, setCurrentUser] = useState({});
  //  const [userEvent, setUserEvent] = useState([]);
  // const history = useHistory();
 
  useEffect(() => {
    API.getCurrentUser().then((res) => {
      // console.log(res.data.user);
      setCurrentUser(res.data.user); 
      // setUserEvent(res.data);
    });
  }, []);


  return (
    <>
  
  <ImageRow/>
  <div className="MyAccount">
     {currentUser ? 
  <div className="center">

       <p id="header-team">Here are your events coming up:</p>

      <UserInfo currentUser={currentUser} />
      {/* <Button /> */}


 {/* <EventCard/>  */}
 

</div>
: null}
</div>
    </>
  );
}


