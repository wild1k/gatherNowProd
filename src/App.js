import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount'
import CreateEvent from './pages/CreateEvent';
import Chat from './pages/Chat';
import DevTeam from './pages/DevTeam';
import LogOut from './pages/LogOut';


import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/lib/date-picker/style/css';
import './App.css';

import "./index.css";









class App extends Component {
  render() {
    return (
     
        <div> 
          <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/CreateAccount" component={CreateAccount}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/MyAccount"component={MyAccount}/>
            <Route exact path="/CreateEvent"component={CreateEvent}/>
            <Route exact path="/Chat" component={Chat}/>
            <Route exact path="/DevTeam" component={DevTeam}/>
            <Route exact path="/LogOut" component={LogOut}/>
          </Switch>
      
          <Footer/>
          </BrowserRouter>
        </div>
      
    );
  }
}

export default App;
