import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
// import { UserOutlined} from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";
import SwitchablePicker from './TimeSelector'
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

  function CreateEvent() {
    let history = useHistory();
    const [CreateEventFormData, setCreateEventFormData] = useState({
      time: "",
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
      setCreateEventFormData({
        ...CreateEventFormData,
        [name]: value
      })
    }

    const handleCreateEventFormSubmit = e => {
      e.preventDefault();
      API.CreateEvents(CreateEventFormData).then(res => {
        console.log(res.data)
        history.push("/MyAccount");
        setCreateEventFormData({
          time: "",
          event_category: "",
          event_name: "",
          event_location: "",
          meeting_spot: "",
          num_of_attendees: "",
          min_age: "",
          additional_info: "" 
        })
      }).catch(err => {
        alert("Post Create Failed")
      })}
    

return (


    <div className="container align">
        <Form className="site-input-group-wrapper" style={styles.formBorder}>
          <p>* Create your event </p>
           <SwitchablePicker/>
           <WhiteSpace></WhiteSpace>
          <Form.Item>
            <Input  placeholder="Event Category"
          name="event_category"
          value={CreateEventFormData.event_category}
          onChange={CreateEventInputChange} 
            />
          </Form.Item>
          <Form.Item>
            <Input  placeholder="Event Name"
          name="event_name"
          value={CreateEventFormData.event_name}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
          <Form.Item>
           <Input  placeholder="Event Location"
          name="event_location"
          value={CreateEventFormData.event_location}
          onChange={CreateEventInputChange}  
           />
          </Form.Item>
          <Form.Item>
           <Input   placeholder="Meeting Spot"
          name="meeting_spot"
          value={CreateEventFormData.meeting_spot}
          onChange={CreateEventInputChange}  
           />
          </Form.Item>
          <Form.Item>
            <Input maxLength={5} placeholder="Maximum number of attendees"
          name="num_of_attendees"
          value={CreateEventFormData.num_of_attendees}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
          <Form.Item>
            <Input maxLength={4} placeholder="Min age requirement"
          name="maxLength"
          value={CreateEventFormData.maxLength}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
          <Form.Item>
            <TextArea rows={4} maxLength={200} placeholder="Additional info"
          name="additional_info"
          value={CreateEventFormData.additional_info}
          onChange={CreateEventInputChange}  
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
          onClick={handleCreateEventFormSubmit}
            >
              Post Your Event
            </Button>
          </Form.Item>
        </Form>
    </div>
  )}; 



export default CreateEvent; 
