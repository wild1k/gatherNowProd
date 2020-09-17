import React, { useState, useEffect} from "react";
import API from "../../utils/API";
import "antd/dist/antd.css";
import "../../index.css";
import { Card, Button, Space, Divider, Row } from "antd";
// import { WhiteSpace } from "antd-mobile";

const styles = {
   formBorder: {
     margin: `${50}px`,
     padding: `${50}px`,
     border: `${2}px`,
     borderColor: `blue`,
     borderStyle: `solid`,
     borderRadius: `${20}px`,
     color: `white`,
     backgroundColor: "violet",
   }
 }


export default function EventCard() {
  const [userEvent, setUserEvent] = useState([]);
  useEffect(() => {
    API.getUserEvent().then((res) => {
      setUserEvent(res.data);
      console.log(res.data);
    });
  }, []);



  return (
    // UserEvent.map(e =>{
    //    e.event_category
    // }

    <div >
      {userEvent.map((event) => {
        return (
          <Card className="align container" style={styles.formBorder}>
            <h2 name="event_name" Title={event.event_name}>
              <em>
                <strong>Event: </strong>
              </em>
              <strong>{event.event_name}</strong>
            </h2>

            <Row>
              <Card.Grid name="event_time">
                <em>Event Time: </em>
                <hr />
                {event.time}
              </Card.Grid>

              <Card.Grid name="event_location" type="vertical">
                <em>Location of Event:</em>
                <hr /> {event.event_location}
              </Card.Grid>

              <Card.Grid name="meeting_spot" type="vertical">
                <em>Gathering Location:</em>
                <hr /> {event.meeting_spot}
              </Card.Grid>
            </Row>

            <Row>
              <Card.Grid name="additional info" type="vertical">
                <em>Additional Info:</em> <hr />
                {event.additional_info}
              </Card.Grid>
            </Row>

            <Divider />
            <Space>
              <Button>Edit Event</Button>
              <Button>Chat</Button>
              <Button>Delete Event</Button>
            </Space>
          </Card>
        );
      })}
    </div>
  );
}
