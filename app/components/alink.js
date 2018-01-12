import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../css/alink.css'

class Alink extends Component {
  render () {
    let cssLabel = this.props.cssLabel ? 'alink ' + this.props.cssLabel : 'alink'
    let img = this.props.src ? <img className='alink-image' src={this.props.src} alt={this.props.alt} width="18" height="18" /> : ""
    let label = this.props.link ? <Link className='alink-link' to={this.props.link}>{this.props.label}</Link> : this.props.label
    
    if (this.props.onClick) {
      return (
        <span className={cssLabel} onClick={this.props.onClick}>
          <div className='alink-image-div'>{img}</div>
          <div className='alink-label' content={this.props.label}>{label}</div>
        </span>
      )
    } else {
      return (
        <span className={cssLabel}>
          <div className='alink-image-div'>{img}</div>
          <div className='alink-label' content={this.props.label}>{label}</div>
        </span>
      )
    }
  }
}

export default Alink