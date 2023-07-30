import React, { Component } from 'react';
import './ChatHistory.scss';
import Message from '../Message/Message';

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((msg, index) => (
      <Message key={`message_${index}`} content={msg} />
    ));
    return <div id="chat-history">{messages}</div>;
  }
}

export default ChatHistory;