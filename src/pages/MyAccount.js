import React, { useState, useEffect } from "react";
import {Row, Col} from "antd";
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

  return (
    <>
  <ImageRow/>
  <Row>
    <Col lg={10}>
          {currentUser ? <p id="header-team"> Welcome {currentUser.first_name}! Here are your events coming up:</p> : null}

      <UserInfo currentUser={currentUser} />
      {/* <Button /> */}

<Row>
<Col>

  <EventCard />
</Col>


</Row>
      
    
    
    
    </Col>


  </Row>

    </>
  );
}

export default MyAccount;
