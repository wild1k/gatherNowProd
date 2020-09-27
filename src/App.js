import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount'
import CreateEvent from './pages/CreateEvent';
import Chat from './pages/Chat';
import DevTeam from './pages/DevTeam';
import LogOut from './pages/LogOut';
import API from '../src/utils/API';
import 'antd-mobile/dist/antd-mobile.css';
import "./index.css";

function App() {
  
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
      history.push("/createAccount");
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

  let history = useHistory();

  const [loginFormData, setLoginFormData] = useState({
    password: "",
    email: "",
    }) 

      const loginInputChange = event => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    })
  }

  const [currentUser, setCurrentUser] = useState()


  useEffect(() => {
    API.getCurrentUser().then(res => {
      console.log(res.data);
      setCurrentUser(res.data.user);
    })
  }, [])
 
  const logout = ()=>{
    API.logout().then(res=>{
      setCurrentUser();
    })
}

  const handleLoginFormSubmit = e => {
    e.preventDefault();
    API.login(loginFormData).then(res => {
      console.log(res.data);
      setLoginFormData({
        email: "",
        password: ""
      })
      API.getCurrentUser().then(res => {
        console.log(res.data);
        setCurrentUser(res.data.user);
      })
    }).catch(err => {
      alert("login failed")
    })
  }
    return (
     
        <div>
          <Router>
          <Navigation currentUser={currentUser}loginFormData={loginFormData} logout={logout} inputChange={loginInputChange} loginSubmit={handleLoginFormSubmit}/>
          <Switch>
            <Route path="/CreateAccount"><CreateAccount currentUser={currentUser} SignUpFormData={SignUpFormData} inputChange={SignUpInputChange} createAccountSubmit={handleSignUpFormSubmit}/>
            </Route>
            <Route exact path="/"><Home currentUser={currentUser}/>
            </Route>
            <Route path="/MyAccount"><MyAccount currentUser={currentUser}/>
            </Route>
            <Route path="/CreateEvent"><CreateEvent currentUser={currentUser}/>
            </Route>
            <Route path="/Chat"><Chat currentUser={currentUser}/>
            </Route>
            <Route path="/DevTeam"><DevTeam currentUser={currentUser}/>
            </Route>
            <Route path="/logout" ><LogOut currentUser={currentUser}  />
            </Route>
          </Switch>
          <Footer/>
          </Router>
        </div>

    );
  }

export default App;
