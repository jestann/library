import React, { Component } from 'react'
import Container from './../components/container'
import Form from './../components/form'
import './../css/main.css'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.signup = this.signup.bind(this)
  }

  async signup (labelsArray, valuesArray) {
    if (labelsArray && valuesArray) {
      let submission = {}
      labelsArray.forEach((label, i) => { submission[label] = valuesArray[i] })
      let data = await this.props.fetcher.authRegister(submission.email, submission.username, submission.password)
      console.log(data)
      if (!data.success) { this.props.sendMessage(data.message, !data.success) }
      else if (data.success) { 
        this.props.sendMessage('Logged in successfully as ' + data.currentUser.username + '.')
        this.props.signup(data.currentUser, data.token)
      }
    }
  }
  
  render () {
    let content = <Form 
      heading="Sign up to join Jive Race" 
      body="Enter your email address. Then choose a username and password below."
      formboxes={[
        { label: "email", type: "text", placeholder: "email" },
        { label: "username", type: "text", placeholder: "username" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={this.signup}
    />
    return (
      <Container title="Sign Up" content={content} cssLabel="signup" {...this.props} />
    )
  }
}

export default Signup