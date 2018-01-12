import React, { Component } from 'react'
import Logo from './logo'
import Greeting from './greeting'
import Navlink from './navlink'

import toggler from './../assets/icons/nav-toggler.png'
import './../css/navbar.css'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.toggleNav = this.toggleNav.bind(this)
    this.state = { navCSS: "navbar-list mobile-list hidden" }
  }
  
  toggleNav () {
    if (this.state.navCSS === "navbar-list mobile-list hidden") {
      this.setState({ navCSS: "navbar-list mobile-list"})
    } else {
      this.setState({ navCSS: "navbar-list mobile-list hidden"})
    }
  }

  render () {
    return (
      <div role="navigation">
        <div className="navbar-custom">
          <Logo {...this.props} />
          <Greeting {...this.props} toggleGreeting={this.toggleGreeting} greetingCSS={this.state.greetingCSS} />
          <div className="navbar-toggler" onClick={this.toggleNav}>
            <img className="nb-toggler-img" alt="Toggle Navigation" src={toggler} />
          </div>
          <div className="navbar-spread">
            <Navlink to="/contact" label="Contact" />
            <Navlink to="/currentteams" label="Teams" />
            <Navlink to="/currentrace" label="Race 2018" />
            <Navlink to="/register" label="Join" />
            <Navlink to="/" label="Home" />
          </div>
        </div>
        <div className={this.state.navCSS}>
          <div className="nav-separator"></div>
          <div className="nb-mobile-list-item"><Navlink to="/" label="Home" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/register" label="Join" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/currentrace" label="Race 2018" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/currentteams" label="Teams" /></div>
          <div className="nb-mobile-list-item"><Navlink to="/contact" label="Contact" /></div>
        </div>
      </div>
    )
  }
}

export default Navbar

// <Link to={`/user/${user.id}`}>{user.name}</Link>
// <Link to="/inbox">Inbox</Link>