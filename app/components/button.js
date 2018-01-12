import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../css/button.css'

class Button extends Component {
  render () {
    let cssLabel = this.props.cssLabel ? 'button ' + this.props.cssLabel : 'button'
    let img = this.props.src ? <img src={this.props.src} alt={this.props.alt} width="18" height="18" /> : ""
    let label = this.props.link ? <Link className='button-link' to={this.props.link}>{this.props.label}</Link> : this.props.label
    
    return (
      <div className={cssLabel} onClick={this.props.onClick}>
        <div className='button-image'>{img}</div>
        <div className='button-label' content={this.props.label}>{label}</div>
      </div>
    )
  }
}

export default Button