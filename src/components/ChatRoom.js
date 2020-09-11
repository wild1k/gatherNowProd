import React, { Component } from 'react';

import { Input, Button, } from "antd";

import openSocket from 'socket.io-client';

import "../index.css";
import "./chatroom.css";
import Axios from 'axios';


const styles = {
    mainContainer: {
        maxWidth: '400px', margin: '0 auto',
        border: `${2}px`,
        borderColor: `black`,
        borderStyle: `solid`,

    },
    formBorder: {
        margin: '0 auto',
        maxWidth: '400px',
        height: '60vh',
        overflowY: 'scroll',
    },
    msgContainerSent: {
        padding: 10,
        marginBottom: 0,
        textAlign: 'right',
    },
    msgContainerRecieved: {
        padding: 10,
        marginBottom: 0,
    },
    sent: {
        backgroundColor: '#f5f5f9',
        padding: 10,
        borderRadius: 15,
        color: 'black',
        width: 'auto',
        display: 'inline-block',
        marginBottom: 0,

    },
    recieved: {
        backgroundColor: 'blueviolet',
        padding: 10,
        borderRadius: 15,
        color: 'white',
        width: 'auto',
        display: 'inline-block',
        marginBottom: 0,
    },
    buttonStyling: {
        width: '20%', display: 'inline-block', backgroundColor: 'blueviolet', color: 'white'
    }
}

export default class ChatRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: undefined,
            newMessage: ''
        }
        this.myRef = React.createRef();
    }

    componentDidMount = () => {


        // these are dummy ids
        // myId will be id of user/sender
        // reciever is the id of other chatter
        // chatid is id of room that was created starting the chat 

        const chatid = 1;
        const myId = 1234;



        Axios({
            url: `http://localhost:8080/api/chat/getMessages/${chatid}`,
            method: 'GET'
        })
            .then((res) => {
                console.log(res.data)
                this.setState({
                    messages: res.data
                }, () => {

                    this.myRef.scrollIntoView();

                })
            })
            .catch((err) => { console.log(err) })

        const socket = openSocket('http://localhost:8080')
        socket.on(myId, data => {
            if (data.action === 'New Message') {
                this.addMessage(data.message)
            }
        })

    }


    addMessage = message => {
        // these functions add messages in realtime to the page

        this.setState(pervState => {
            const updatedMessages = [...pervState.messages, message];
            return {
                messages: updatedMessages
            }
        }, () => {
            this.myRef.scrollIntoView()
        })
    }


    sendMessage = () => {

        const chatid = 1;
        const sender = 1234;
        const receiver = 1235;

        const { newMessage, messages } = this.state;
        Axios({
            url: `http://localhost:8080/api/chat/sendMessage`,
            method: 'POST',
            data: {
                chatid,
                sender,
                receiver,
                message: newMessage
            }
        })
            .then((res) => {
                this.setState({
                    messages: [...messages, res.data],
                    newMessage: '',
                }, () => {
                    this.myRef.scrollIntoView();
                })
            })
            .catch((err) => { console.log(err) })

    }

    renderMessage = (text, type, key) => {
        console.log(text);
        return (
            type === 'sent' ?

                <p key={key} style={styles.msgContainerSent}>
                    <p style={styles.sent} >
                        {text}
                    </p>
                </p>

                :

                <p key={key} style={styles.msgContainerRecieved}>
                    <p style={styles.recieved} >
                        {text}
                    </p>
                </p>


        )
    }

    render() {
        const myId = 1234;
        const { messages } = this.state;

        return (
            <>
                <h1 className='align' style={{ marginBottom: 0 }}>Chat here</h1>

                <div style={styles.mainContainer}>
                    {
                        messages ? <>
                            <div style={styles.formBorder}
                            >
                                {
                                    messages.map((item, index) => {

                                        return this.renderMessage(item.message, (item.sender === myId) ? 'sent' : 'receieved', index)

                                    })
                                }

                                <div style={{ float: "left", clear: "both" }}
                                    ref={(el) => { this.myRef = el; }}>
                                </div>

                            </div>
                            <Input onChange={(e) => { this.setState({ newMessage: e.target.value }) }} value={this.state.newMessage} placeholder="Your Message" style={{ width: '80%', display: 'inline-block' }} />
                            <Button onClick={this.sendMessage} style={styles.buttonStyling} >
                                Send
                            </Button>
                        </>
                            : <p> Loading</p>
                    }

                </div>

            </>
        )
    }
}

//  function for creating chatroom between two users
// createChatRoom = () => {
//     Axios({
//         url: `http://localhost:8080/api/chat/createChat`,
//         method: 'POST',
//         data: {
//             user1: 1234,
//             user2: 1235
//         }
//     })
//         .then((res) => {
//             this.setState({
//                 chatroom: res.data
//             })
//         })
//         .catch((err) => { console.log(err) })

// }