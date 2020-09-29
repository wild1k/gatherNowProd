import React, { useState, useEffect} from "react";
import API from "../../utils/API";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Button, Space, Divider, Row} from "antd";
// import { Link } from "react-router-dom";

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

//  const DeleteButton = ({id}) => (
//    <span
//    className="delete-btn"
//    role="button"
//    onClick={() => eventCards.delete(`${}`)}
//    >
//      Delete
//    </span>
//  )

export default function EventCard(props) {
  // const [currentUser, setCurrentUser] =useState([]);
  const [userEvent, setUserEvent] = useState([]);
  useEffect(() => {
    API.getCurrentUser().then((res) => {
      setUserEvent(res.data.EventCard);
      console.log(res.data);
    });
  }, [props.currentUser]);

// function DeleteButton => () = {
//   deleteEventCard: function(EventCard.id) {
//     return API.delete('/delete/:id');
//   }
// }


  

  return (
    // UserEvent.map(e =>{
    //    e.event_category
    // }

   <div>
    
     {/* {userEvent.map((e) => {  */}
       {/* return ( */}
          <Card key={props.id} style={styles.formBorder} >
            <h2 name="event_name" title='Event Name'>
              <em>
                <strong>Event: </strong>
              </em>
              <strong>{props.event_name}</strong>
            </h2>

            <Row>
              <Card.Grid name="start_time">
                <em>Event Time: </em>
                <hr />
                {props.start_time}
              </Card.Grid>

              <Card.Grid name="event_location" type="vertical">
                <em>Location of Event:</em>
                <hr /> {props.event_location}
              </Card.Grid>

              <Card.Grid name="meeting_spot" type="vertical">
                <em>Gathering Location:</em>
                <hr /> {props.meeting_spot}
              </Card.Grid>
            </Row>

            <Row>
              <Card.Grid name="additional info" type="vertical">
                <em>Additional Info:</em> <hr />
                {props.additional_info}
              </Card.Grid>
            </Row>

            <Divider />
            <Space>
              {/* <Button onClick={userEvent.id}>Edit Event</Button> */}
              <Button>Chat</Button>
              {/* <Button onClick={(e) => this.deleteEvent(EventCard, id, e)}>Delete Button</Button> */}
            </Space>
          </Card>

          {/* </Link> */}
       );
       {/* })} */}
       </div>
  
  )}