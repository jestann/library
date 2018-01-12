import React, { Component } from 'react'
import Alink from './../components/alink'
import caret from './../assets/icons/caret.png'
import './../css/greeting.css'

class Greeting extends Component {
  constructor (props) {
    super(props)
    this.toggleGreeting = this.toggleGreeting.bind(this)
    this.state = { greetingCSS: "greeting-list mobile-list hidden" }
  }
  
  toggleGreeting () {
    if (this.state.greetingCSS === "greeting-list mobile-list hidden") {
      this.setState({ greetingCSS: "greeting-list mobile-list"})
    } else {
      this.setState({ greetingCSS: "greeting-list mobile-list hidden"})
    }
  }

  render () {
    let signupImg = 'https://png.icons8.com/signature/ultraviolet/24'
    let loginImg = 'https://png.icons8.com/lock/color/24'
    let logoutImg = 'https://png.icons8.com/unlock/color/24'
    if (this.props.loggedIn && this.props.user) {
      return (
        <div className="greeting">
          <div className="greeting-dropdown"> 
            <div className="greeting-toggler" onClick={this.toggleGreeting}>
              <img className="greeting-toggler-img" src={caret} alt="User Options" />
            </div>
          </div>
          <div className="greeting-collapse">
            <div className="greeting-text">Welcome, {this.props.user.username}.</div>
            <Alink label="Log Out" src={logoutImg} alt="" cssLabel="logout" onClick={this.props.logout} />
          </div>
          <div className={this.state.greetingCSS}>
            <div className="greeting-list-header">Welcome, {this.props.user.username}.</div>
            <div className="greeting-list-divider"></div>
            <div className="greeting-list-item" onClick={this.props.logout}>
              <img className="greeting-list-img" src={logoutImg} alt="" />
              Log Out
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <div className="greeting-dropdown"> 
            <div className="greeting-toggler" onClick={this.toggleGreeting}>
              <img className="greeting-toggler-img" src={caret} alt="User Options" />
            </div>
          </div>
          <div className="greeting-collapse">
            <div className="greeting-text">Welcome, Guest.</div>
            <Alink label="Log In" src={loginImg} alt="" cssLabel="login" link="/login" />
            <Alink label="Sign Up" src={signupImg} alt="" cssLabel="signup" link="/signup" />
          </div>
          <div className={this.state.greetingCSS}>
            <div className="greeting-list-header">Welcome, Guest.</div>
            <div className="greeting-list-divider"></div>
            <div className="greeting-list-item">
              <a href="/signup"><img className="greeting-list-img" src={signupImg} alt="" />Sign Up</a>
            </div>
            <div className="greeting-list-item">
              <a href="/login"><img className="greeting-list-img" src={loginImg} alt="" />Log In</a>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Greeting