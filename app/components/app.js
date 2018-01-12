import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'main.css'

import Navbar from './navbar'
import Main from './main'
import Footer from './footer'

class App extends Component {
  constructor (props) {
    super(props)
    let fetcher = new Fetcher()
    this.state = { 
      fetcher: fetcher,
      loggedIn: fetcher.loggedIn,
      token: fetcher.token,
      user: fetcher.user,
      dat: fetcher.data,
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
          <Navbar 
            fetcher={this.state.fetcher}
            loggedIn={this.state.loggedIn} 
            token={this.state.token} 
            user={this.state.user} 
            signup={this.signup}
            login={this.login}
            logout={this.logout} 
          />
          <Main 
            fetcher={this.state.fetcher}
            loggedIn={this.state.loggedIn} 
            token={this.state.token} 
            user={this.state.user} 
            data={this.state.data}
            message={this.state.message} 
            messageVisible={this.state.messageVisible}
            isError={this.state.isError}
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