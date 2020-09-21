import React, { useState, useEffect} from "react";
import API from "../../utils/API";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Button, Space, Divider, Row} from "antd";
// import { Router } from "react-router-dom";

// import { WhiteSpace } from "antd-mobile";

const styles = {
   formBorder: {
     margin: `${50}px`,
     padding: `${10}px  ${20}px`,
     border: `${2}px`,
     borderColor: `blue`,
     borderStyle: `solid`,
     borderRadius: `${20}px`,
     color: `white`,
     backgroundColor: "violet",
     width: 'auto',

   }
 }

//  function DeleteBtn = (props) => {
//   return (
//     <span className="delete-btn" {...props} role="button">
//       Delete
//     </span>
//   );
// }
// function btndelete = () => {
//   deleteUserEvent: function(id) {
//     return API.delete('/delete/:id');
//   }
// }
//  const DeleteButton = ({id}) => (
//    <span
//    className="delete-btn"
//    role="button"
//    onClick={() => eventCards.delete(`${}`)}
//    >
//      Delete
//    </span>
//  )

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

    <div>
      {userEvent.map((event) => {
        return (
          <Card key={event.id} style={styles.formBorder} className="align">
            <h2 name="event_name" title={event.event_name}>
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
              <Button onClick={EventCard.id}>Edit Event</Button>
              <Button>Chat</Button>
              {/* <DeleteBtn onClick={() => this.deleteMusic(props.EventCard._id)} /> */}
            </Space>
          </Card>
        );
      })}
    </div>
  );
}
