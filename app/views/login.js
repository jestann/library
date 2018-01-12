import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../css/main.css'

class Login extends Component {
  constructor (props) { 
    super(props)
    this.login = this.login.bind(this)
  }
  
  async login (labelsArray, valuesArray) {
    if (labelsArray && valuesArray) {
      let submission = {}
      labelsArray.forEach((label, i) => { submission[label] = valuesArray[i] })
      let data = await this.props.fetcher.login(submission.username, submission.password)
      if (!data.success) { this.props.sendMessage(data.message, !data.success) }
      else if (data.success) { 
        this.props.sendMessage('Logged in successfully as ' + data.currentUser.username + '.')
        this.props.login(data.currentUser, data.token)
      }
    }
  }
  
  render () {
    let content = <Form 
      heading="Log in to Jive Race" 
      body="Enter your user credentials below."
      formboxes={[
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={this.login}
    />
    
    return (
      <Container title="Log In" content={content} cssLabel="login" {...this.props} />
    )
  }
}

export default Login