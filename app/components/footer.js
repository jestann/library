import React, { Component } from 'react'
import './../css/footer.css'

// make this collapse for mobile

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <div className="footer-text">Copyright 2017 Jive Race</div>
        <div className="social-icons"></div>
      </div>
    )
  }
}

export default Footer