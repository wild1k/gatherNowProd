import React from "react";
import Avatar from "./ProfilePic";
import { Descriptions, Card, Row, Col } from "antd";
import "./index.css";

function UserInfo(props) {
  return (
 
      <div className="cardCenter">   
    
        <Card >  
          {props.currentUser ? 
          <Row justify="start" align="top">
            <Col>
              <Avatar />
                <Card >
                 
                    <Descriptions>
                      <Descriptions.Item label="First">
                        {props.currentUser.first_name}
                      </Descriptions.Item>
                      <Descriptions.Item label="Last">
                        {props.currentUser.last_name}
                      </Descriptions.Item>
                    </Descriptions>
            
                </Card>
                <Card>
               
                  <Descriptions>
                    <Descriptions.Item label="Age">
                      {props.currentUser.age}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email">
                      {props.currentUser.email}
                    </Descriptions.Item>
                  </Descriptions>
              
              </Card>

  </Col>
<Row>
  <Col>
                <Card>
                   
                  <Descriptions className="bioCont">
                    <Descriptions.Item label="Bio">
                      {props.currentUser.bio}
                    </Descriptions.Item>
                  </Descriptions>
                   
                </Card>
            </Col>
          </Row>
      </Row>
       :null }
    </Card>
  
    </div>
   
)
}

export default UserInfo;
