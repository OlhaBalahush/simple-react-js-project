import React, { Component } from 'react';
import './App.css';
// import Header from './components/header.js'
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import { connect, sendMessage } from './api/index'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatHistory: [JSON.stringify('message')]
    }
  }

  componentDidMount() {
    connect((message) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, message]
      }))
      console.log(this.state);
    });
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMessage(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    )
  }
}
