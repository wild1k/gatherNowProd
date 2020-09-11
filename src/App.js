import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import CreateAccount from './pages/CreateAccount';
import Navigation from './components/NavBar';
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount'
import CreateEvent from './pages/CreateEvent';
import Chat from './pages/Chat';
import DevTeam from './pages/DevTeam'

import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/lib/date-picker/style/css';
import './App.css';









class App extends Component {
  render() {
    return (
     
        <div> 
          <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route exact path ="/CreateAccount" component={CreateAccount}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/MyAccount"component={MyAccount}/>
            <Route exact path="/CreateEvent"component={CreateEvent}/>
            <Route exact path="/Chat" component={Chat}/>
            <Route exact path="/DevTeam" component={DevTeam}/>
          </Switch>
          <Footer/>
          </BrowserRouter>
        </div>
      
    );
  }
}

export default App;
