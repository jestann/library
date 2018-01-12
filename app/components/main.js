import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './../css/main.css'

import Home from './../templates/home'
import About from './../templates/about'
import Register from './../templates/register'
import CurrentRace from './../templates/currentRace'
import CurrentTeams from './../templates/currentTeams'
import Contact from './../templates/contact'

import Signup from './../templates/signup'
import Login from './../templates/login'

import Edit from './../templates/edit'

import Results from './../templates/results'

import User from './../templates/user'
import Race from './../templates/race'
import Team from './../templates/team'
import Result from './../templates/result'


class Main extends Component {
  render () {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" render={() => <Home {...this.props} />} />
          <Route exact path="/about" render={() => <About {...this.props} />} />
          <Route exact path="/register" render={() => <Register {...this.props} />} />
          <Route exact path="/currentrace" component={() => <CurrentRace {...this.props} />} />
          <Route exact path="/currentteams" component={() => <CurrentTeams {...this.props} />} />
          <Route exact path="/contact" component={() => <Contact {...this.props} />} />
          
          <Route exact path="/signup" component={() => <Signup {...this.props} />} />
          <Route exact path="/login" component={() => <Login {...this.props} />} />

          <Route exact path="/edit" component={() => <Edit {...this.props} />} />

          <Route exact path="/results" component={() => <Results {...this.props} />} />
      
          <Route exact path="/user" component={() => <User {...this.props} />} />
          <Route exact path="/race" component={() => <Race {...this.props} />} />
          <Route exact path="/team" component={() => <Team {...this.props} />} />
          <Route exact path="/result" component={() => <Result {...this.props} />} />
        </Switch>
      </div>
    )
  }
}

export default Main