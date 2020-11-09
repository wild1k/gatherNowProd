const axios = require("axios")
const urlPrefix = "http://localhost:8080"

const API = {
    // users Login // Log out
    login: function (userData) {
        return axios.post(`${urlPrefix}/api/users/login`, userData, { withCredentials: true });
    },
    logout: function () {
        return axios.get(`${urlPrefix}/api/users/logout`, { withCredentials: true });
    },
    // users session Info
    getCurrentUser: function () {
        return axios.get(`${urlPrefix}/api/users/readsessions`, { withCredentials: true })
    },
    // users Profile Information
    createAccount: function(userData){
        return axios.post(`${urlPrefix}/api/users/createAccount`, userData, { withCredentials: true });
    },
    //Event Forms and Cards
   CreateEvents:function(userData){
       return axios.post(`${urlPrefix}/api/events/CreateEvents`, userData, { withCredentials: true } );
   },
   getUserEvent:function(userData){
    return axios.get(`${urlPrefix}/api/events/`, userData);
},
   deleteEventCard:function(event, id){
    return axios.delete(`${urlPrefix}/api/events/delete/:id`,{withCredentials:true});
},
};


export default API;

