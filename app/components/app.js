// need to revamp this for library

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

/* using redux example

import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src="ctsw_logo.png" height="96" alt="CodingTheSmartWay.com"></img>
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2">
              <img src="react_logo.png" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2">
              <img src="vuejs_logo.png" height="96" alt="Vue.js" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;


// example component using store

import React, { Component } from 'react';
class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  votesAngularInPercent() {
    if (this.store.getState().angular) {
      return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    } else {
      return 0
    }
  }
  votesReactInPercent() {
    if (this.store.getState().react) {
      return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    } else {
      return 0
    }
  }
  votesVuejsInPercent() {
    if (this.store.getState().vuejs) {
      return (this.store.getState().vuejs / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    } else {
      return 0
    }
  }
  votesAngularInPercentStyle() {
    return {
      width: this.votesAngularInPercent()+'%'
    }
  }
  votesReactInPercentStyle() {
    return {
      width: this.votesReactInPercent()+'%'
    }
  }
  votesVuejsInPercentStyle() {
    return {
      width: this.votesVuejsInPercent()+'%'
    }
  }
  render() {
    return (
      <div>
        <span className="label label-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={this.votesAngularInPercentStyle()}></div>
        </div>
        <span className="label label-info">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-info" style={this.votesReactInPercentStyle()}></div>
        </div>
        <span className="label label-success">Vue.js: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-success" style={this.votesVuejsInPercentStyle()}></div>
        </div>
      </div>
    )
  }
}
export default Results;

*/