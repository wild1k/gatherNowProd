import React from "react";
import { NavLink, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../../index";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import UserInfo from "../UserProfile/UserProfile";

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === "3") {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render(props) {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="3">
          <NavLink to="/LogIn">Log In</NavLink>
        </Menu.Item>
        <Menu.Item key="1">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="2"><NavLink to="/CreateAccount">Sign Up</NavLink></Menu.Item> */}
        <Menu.Item key="4">
          <NavLink to="/MyAccount">My Account</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/CreateEvent">Create New Event</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="6"><NavLink to="/Chat">Chat</NavLink></Menu.Item> */}
        <Menu.Item key="7">
          <NavLink to="/DevTeam">Development Team</NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/LogOut">Log Out</NavLink>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        key={UserInfo}
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <Link
          to="/MyAccount"
          key={UserInfo}
          className="ant-dropdown-link dropdown"
          onClick={(e) => e.preventDefault()}
        >
          My Account <DownOutlined />
        </Link>
      </Dropdown>
    );
  }
}

export default OverlayVisible;
