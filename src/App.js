import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import { connect, sendMessage } from './api/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    };
    this.connected = false;
    // this.chatContainerRef = React.createRef();
  }

  componentDidMount() {
    if (!this.connected) { // connect only if not already connected
      connect((message) => {
        console.log("New Message", message);
        this.setState((prevState) => ({
          chatHistory: [...prevState.chatHistory, message]
        }));
      });
      this.connected = true;
    }
  }

  // TODO: scrolling of history container
  // componentDidUpdate(prevProps, prevState) {
  //   // Check if new message is added before scrolling
  //   if (prevState.chatHistory.length !== this.state.chatHistory.length) {
  //     this.scrollToBottom();
  //   }
  // }

  // scrollToBottom() {
  //   // Use the ref to access the chat container DOM element and scroll to the bottom
  //   if (this.chatContainerRef.current) {
  //     this.chatContainerRef.current.scrollTop = this.chatContainerRef.current.scrollHeight;
  //   }
  // }

  scrollToBottom() {
    // Use the ref to access the chat container DOM element and scroll to the bottom
    if (this.chatContainerRef.current) {
      this.chatContainerRef.current.scrollTop = this.chatContainerRef.current.scrollHeight;
    }
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMessage(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div id='chat-container'>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}
