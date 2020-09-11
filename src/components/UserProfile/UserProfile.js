import React from "react";
import Avatar from "./ProfilePic";
import { Descriptions, Card, Row, Col } from "antd";
import "./index.css";







function UserInfo(props) {
  return (
    <>

      <div className="cardCenter" >
        <Card className="size">
          <Row justify="start" align="top">
            <Col className="userStyle">
              <Avatar />
              <Row>
                
                  <Card >
                  {props.currentUser ?  
                    <Descriptions className="userStyle">
                      <Descriptions.Item label="Name">
                        {props.currentUser.first_name}
                      </Descriptions.Item>
                    </Descriptions>
                    : null}
                  </Card>
                  
              </Row>
            </Col>
            <Col className="userStyle">
              
                <Card>
                {props.currentUser ?  
                  <Descriptions>
                    <Descriptions.Item label="Age" span={5}>
                      {props.currentUser.age}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email" >
                      {/* {props.currentUser.email} */}
                    </Descriptions.Item>
                  </Descriptions>
                   : null} 
                </Card>
              
              {props.currentUser ?
                <Card>
                  <Descriptions className='bioCont'>
                    <Descriptions.Item label="Bio" >
                      {props.currentUser.bio}
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
                : null}
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}
export default UserInfo;

