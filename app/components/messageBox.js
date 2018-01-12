import React, { Component } from 'react'
import './../css/message.css'

class MessageBox extends Component {
  render () {
    let isError = this.props.isError ? " error" : " success"
    let messageVisible = this.props.messageVisible ? "message-box" : "message-box hidden"
    let cssLabel = messageVisible + isError
    return (
      <div className={cssLabel}>
        <div className='message'>{this.props.message}</div>
        <div className='message-close-button' onClick={this.props.handleMessage}>x</div>
      </div>
    )
  }
}

export default MessageBox