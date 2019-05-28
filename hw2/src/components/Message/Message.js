import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <span className="message">{this.props.text}</span>;
  }
}

export default Message;
