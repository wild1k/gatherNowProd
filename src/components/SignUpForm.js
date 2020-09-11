
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
// import { UserOutlined} from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";

import API from "../utils/API";

import "../index.css";

const styles = {
  formBorder: {
    margin: `${200}px vh`,
    padding: `${50}px`,
    border: `${2}px`,
    borderColor: `black`,
    borderRadius: `${20}px`,
    borderStyle: `solid`,
    color: 'red',
  }
}
function SignUpForm() {
  let history = useHistory();
  const [SignUpFormData, setSignUpFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    phoneNumber: "",
    password: "",
    bio: ""

  })
  const SignUpInputChange = event => {
    const { name, value } = event.target;
    setSignUpFormData({
      ...SignUpFormData,
      [name]: value
    })
  }
  const handleSignUpFormSubmit = e => {
    e.preventDefault();
    API.createAccount(SignUpFormData).then(res => {
      console.log(res.data)
      history.push("/LogIn");
      setSignUpFormData({
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        phoneNumber: "",
        password: "",
        bio: ""
      })
    }).catch(err => {
      alert("Account Creation Failed")
    })
  }


  return (


    <div className="container">
      <div className="align ">
        <Form className="site-input-group-wrapper" style={styles.formBorder}>
          <p>* Enter your user information below</p>
          <Form.Item>
            <Input className="site-form-item-icon" maxLength={15} placeholder="First Name"
              name="first_name"
              value={SignUpFormData.first_name}
              onChange={SignUpInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" maxLength={15} placeholder="Last Name"
              name="last_name"
              value={SignUpFormData.last_name}
              onChange={SignUpInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" maxLength={5} placeholder="Age"
              name="age"
              value={SignUpFormData.age}
              onChange={SignUpInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" placeholder="Email"
              name="email"
              value={SignUpFormData.email}
              onChange={SignUpInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" placeholder="Phone Number (no dashes)"
              name="phoneNumber"
              value={SignUpFormData.phoneNumber}
              onChange={SignUpInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Input className="site-form-item-icon" placeholder="Password"
              name="password"
              value={SignUpFormData.password}
              onChange={SignUpInputChange}
            />

          </Form.Item>

          <Form.Item>
            <TextArea rows={4} maxLength={200} placeholder="User Bio"
              name="bio"
              value={SignUpFormData.bio}
              onChange={SignUpInputChange}
            />
          </Form.Item>


          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>


          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSignUpFormSubmit}
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
