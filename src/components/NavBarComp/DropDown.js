import React from 'react';
import { NavLink, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../../index';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1"><NavLink to="Home">Home</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/CreateAccount">Sign Up</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to="/LogIn">Log In</NavLink></Menu.Item>
        <Menu.Item key="4"><NavLink to="/MyAccount">My Account</NavLink></Menu.Item>
        <Menu.Item key="5"><NavLink to="/CreateEvent">Create New Event</NavLink></Menu.Item>
        <Menu.Item key="6"><NavLink to="/Chat">Chat</NavLink></Menu.Item>
        <Menu.Item key="7"><NavLink to="/DevTeam">Development Team</NavLink></Menu.Item>
        <Menu.Item key="8"><NavLink to="/LogOut">Log Out</NavLink></Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <Link className="ant-dropdown-link dropdown" onClick={e => e.preventDefault()}>
          Menu <DownOutlined />
        </Link>
      </Dropdown>
    );
  }
}

export default OverlayVisible;