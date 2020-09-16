import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import "antd/dist/antd.css";
import "./index.css";
import { Card, Button, Col, Space, Divider, Row } from "antd";
// import { WhiteSpace } from "antd-mobile";

export default function EventCard() {

  const [userEvent, setUserEvent] = useState([])
  useEffect(() => {
     API.getUserEvent().then(res => {
        setUserEvent(res.data);
        console.log(res.data);
     })
  }, [])

  const renderEvents = () => {
     return (
        userEvent.map((event) => {
           return (
              <div>
                 <Card name="event_name" title={event.event_name} >
                      <Card.Grid name='event_time'>Event Time: {event.time}</Card.Grid>
                 <Card.Grid name='event_location' type='vertical'>Location of Event: {event.event_location}</Card.Grid>
                 <Card.Grid name='meeting_spot' type='vertical'>Gathering Location: {event.meeting_spot}</Card.Grid>
                      </Card>
              </div>
           )
        })
     )
  }
   renderEvents();

   return (
    // UserEvent.map(e =>{
    //    e.event_category
    // }

    <div className="bottomMargin"  align="top" justify="start">
           {userEvent.map(event => {
          return (
     
        <Row>
          <Col >
            <Card className="bottomMargin cardCenter" title={event.event_name} name="event_name">
              <Col >
                <Row>
                      <Card.Grid name='event_time'><em>Event Time:</em><hr/> {event.time}</Card.Grid>
                 <Card.Grid name='event_location' type='vertical'><em>Location of Event:</em><hr/>{event.event_location}</Card.Grid>
                 <Card.Grid name='meeting_spot' type='vertical'><em>Gathering Location:</em><hr/> {event.meeting_spot}</Card.Grid>
                </Row>
                <Row>
                <Card.Grid  name="additional info" type="vertical"><em>Additional Info: </em><hr/>{event.additional_info} </Card.Grid>
              </Row>
              </Col>
              <Divider />
              <Space>
                <Button>Edit Event</Button>
                <Button>Chat</Button>
                <Button>Delete Event</Button>
              </Space>
            </Card>
          </Col>
        </Row>
          )
          })}
    </div>
    )
  }
