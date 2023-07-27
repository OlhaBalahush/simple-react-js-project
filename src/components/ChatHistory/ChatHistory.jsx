import React, { Component } from 'react';
import './ChatHistory.scss';
import Message from '../Message/Message';

class ChatHistory extends Component {
  render() {
    console.log('chatHistory',this.props.chatHistory);
    const messages = this.props.chatHistory.map(msg => <Message key={msg.timeStamp} message={msg.data} />);
    
    return (
      <div id="chat-history">
        {messages}
      </div>
    );
  };

}

export default ChatHistory;