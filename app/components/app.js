import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Fetcher } from './tools/fetcher'
// import { action1, action2, action3 } from './store/actions'
import 'main.css'

import Navbar from './navbar'
import Main from './main'
import Footer from './footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
    
    let fetcher = new Fetcher()
    this.state = { 
      fetcher: fetcher,
      loggedIn: fetcher.loggedIn,
      token: fetcher.token,
      user: fetcher.user,
      data: fetcher.data,
      isError: fetcher.isError,
      message: fetcher.message,
      messageVisible: fetcher.messageVisible
    }
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
  }
  
  /* to alter store with view
  handleAction1 () {
    this.store.dispatch(action1());
  } // then set onClick to be this and it will dispatch the action */
  
  /* to use store in view
  useAction1() {
    if (this.store.getState().action1Store) {
      return (this.store.getState().action1Store * 1)
    } else { return 0 }
  }
  
  useAction1Style() {
    return { width: useAction1() + "%" }
  }
  
  render () {
    return (
      <div style={this.useAction1Style()}>
        total action 1: {this.useAction1()}
      </div>
    )
  } */

  signup (user=this.state.fetcher.user, token=this.state.fetcher.token) {
    this.setState({ loggedIn: true, user: user, token: token })
  }
  
  login (user=this.state.fetcher.user, token=this.state.fetcher.token) {
    this.setState({ loggedIn: true, user: user, token: token })
  }
  
  async logout () {
    let data = await this.state.fetcher.logout()
    if (!data.success) { 
      this.sendMessage(data.message, true) 
    }
    else if (data.success) {
      this.setState({ loggedIn: false, user: null, token: null })
      this.sendMessage(data.message)
    }
  }
  
  sendMessage (message, isError=false) {
    this.setState({ message: message, messageVisible: true, isError: isError})
  }
  
  handleMessage () {
    this.setState({ messageVisible: false })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar {...this.state}
            token={this.state.token} 
            user={this.state.user} 
            signup={this.signup}
            login={this.login}
            logout={this.logout} 
          />
          <Main {...this.state}
            handleMessage={this.handleMessage}
            sendMessage={this.sendMessage}
            signup={this.signup}
            login={this.login}
            logout={this.logout}
          />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App