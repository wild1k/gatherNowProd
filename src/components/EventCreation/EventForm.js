import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
// import { UserOutlined} from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";
import API from "../../utils/API"
import "../../index";
import { WhiteSpace } from "antd-mobile";





const styles = {
  formBorder: {
  padding: `${75}px`,
  border: `${2}px`,
  borderColor: `black`,
  borderStyle: `solid`,
  borderRadius: `${20}px`,
  color: 'red',
}}

  function CreateEvent(props) {
    let history = useHistory();
    const [EventFormData, setEventFormData] = useState({
      start_time: '',
      event_category: "",
      event_name: "",
      event_location: "",
      meeting_spot: "",
      num_of_attendees: "",
      min_age:"",
      additional_info:""

    })

    const CreateEventInputChange = event => {
      const { name, value } = event.target;
      setEventFormData({
        ...EventFormData,
        [name]: value
      })
    }

    const handleEventFormSubmit = e => {
      e.preventDefault();
      API.createEvents(EventFormData).then(res => {
        console.log(res.data)
        history.push("/");
        setEventFormData({
          start_time: "",
          end_at: "",
          event_category: "",
          event_name: "",
          event_location: "",
          meeting_spot: "",
          num_of_attendees: "",
          min_age: "",
          additional_info: ""
        })
      }).catch(err => {
        alert("Event Creation Failed")
      })}
    

return (


    <div className="container align">
      {/* <button onClick={()=>showEventForm(true)}>Add Event</button> */}
        <Form className="site-input-group-wrapper" style={styles.formBorder} value={EventFormData} onSubmit={props.handleEventFormSubmit}>
          <p>* Create your event </p>
           <WhiteSpace></WhiteSpace>
     <Form.Item>
            <Input  placeholder="Start Time"
          name="start_at"
          type="time"
          value={EventFormData.start_time.Input}
          onChange={CreateEventInputChange} 
            />
          </Form.Item>  
          <Form.Item>
            <Input  placeholder="Event Category"
          name="event_category"
          value={EventFormData.event_category}
          onChange={CreateEventInputChange} 
            />
          </Form.Item>
          <Form.Item>
            <Input  placeholder="Event Name"
          name="event_name"
          value={EventFormData.event_name}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
          <Form.Item>
           <Input  placeholder="Event Location"
          name="event_location"
          value={EventFormData.event_location}
          onChange={CreateEventInputChange}  
           />
          </Form.Item>
          <Form.Item>
           <Input   placeholder="Meeting Spot"
          name="meeting_spot"
          value={EventFormData.meeting_spot}
          onChange={CreateEventInputChange}  
           />
          </Form.Item>
          <Form.Item>
            <Input maxLength={5} placeholder="Maximum number of attendees"
          name="num_of_attendees"
          value={EventFormData.num_of_attendees}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
          <Form.Item>
            <Input maxLength={4} placeholder="Min age requirement"
          name="maxLength"
          value={EventFormData.maxLength}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
          <Form.Item>
            <TextArea rows={4} maxLength={200} placeholder="Additional info"
          name="additional_info"
          value={EventFormData.additional_info}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
        
            <Button
              type="primary"
              htmlType="submit"
              className="event-form-button"
              onClick={handleEventFormSubmit}
            >
              Post Your Event
            </Button>
            {/* <Button
              type="primary"
              htmlType="Edit"
              className="login-form-button"
              // onClick={handleEditEventForm}
            >
             Edit Your Event
            </Button> */}
        
        </Form>
    </div>
  )}; 



export default CreateEvent; 
