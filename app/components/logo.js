import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../css/logo.css'

import logo from './../assets/icons/running-team.png'

class Logo extends Component {
  render () {
    return (
      <div className="logo">
        <Link to="/"><img src={logo} className="logo-image" alt="Jive team running logo" /></Link>
        <Link className="logo-title" to="/">Jive Race</Link>
      </div>
    )
  }
}

export default Logo