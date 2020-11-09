import React, {useState, useEffect} from "react";
// import SwitchablePicker from '../components/EventCreation/TimeSelector';
import EventForm from "../components/EventCreation/EventForm";
import '../index.css';
import ImageRow from "../components/ImageRow";
// import OverlayVisible from '../components/NavBarComp/DropDown';
import API from '../utils/API';
import EventCard from '../components/UserProfile/EventCard';
import {useHistory} from 'react-router-dom';

export default function CreateEvent(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [userEvent, setUserEvent] = useState([]);
 const history = useHistory();

 useEffect(() => {
      if(!props.currentUser){
       history.push('/')
     }
   API.getUserEvent().then((res) => {
     // console.log(res.data.user);
     setCurrentUser(res.data); 
     setUserEvent(res.data);
   });
 }, [props.userEvent])

  return (
   <>
      <ImageRow/>
     
      <EventForm/>
      
      
       <div className='userEventCards'>
 {userEvent?<EventCard key={userEvent.id} name={userEvent.event_name} time={userEvent.start_time} loc={userEvent.event_location} locSpot={userEvent.meetingSpot} info={userEvent.additional_info}/> : null},
 </div>
  </>
  )
}

//test change