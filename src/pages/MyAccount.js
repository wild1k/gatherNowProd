import React, { useState, useEffect } from "react";
import EventForm from "../components/EventCreation/EventForm";
import EventCard from "./../components/UserProfile/EventCard";
import {Row, Col} from 'antd';
import "../index";
import API from "../utils/API";
import UserInfo from "../components/UserProfile/UserProfile";
import ImageRow from "../components/ImageRow";

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
      setUserEvent(res.data.EventCard);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <ImageRow />
      <div className="center size container">
        {currentUser ? (
          <Row>
            <Col>
            <p id="header-team">
              {currentUser.first_name}, Here are your events coming up:
                
            </p>
 {userEvent ? <EventCard> {userEvent.event_name} </EventCard> :null }
         </Col>
          <Col>
            <UserInfo currentUser={currentUser} />
</Col>
<Row>
  <Col>
            {/* <Button /> */}
           
            <EventForm currentUser={currentUser} />
           
         </Col>
       </Row>
          </Row>
        ) : null}
      </div>
    </>
  );
}

export default MyAccount;
