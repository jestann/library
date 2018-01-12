import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../css/attribute.css'

class Attribute extends Component {
  render () {
    // could include props: label, content, link, postlink, key (for a list), long (boolean),
    let postlink = this.props.postlink ? this.props.postlink : ''
    let mainCssLabel = 'no-style'
    let attributeLabel = ''
    let attribute = ''

    // attribute list item
    if (this.props.keyed >= 0) {
      attribute = <div className='attribute-list-item' key={this.props.keyed}>
        <Link className='attribute-link' to={this.props.link}>{this.props.content}</Link>
        {postlink}
      </div>
    } 
    
    // regular attribute
    else {
      mainCssLabel = 'attribute'
      attributeLabel = <div className='attribute-label'>{this.props.label}</div>
      let cssLabel = 'attribute' + (this.props.long ? '-long' : '-short')

      if (this.props.link) { 
        attribute = <div className={cssLabel}>
          <Link className='attribute-link' to={this.props.link}>{this.props.content}</Link>
          {postlink}
        </div> 
      } else { 
        attribute = <div className={cssLabel}>
          {this.props.content}
          {postlink}
        </div>
      }
    }

    return (
      <div className={mainCssLabel}>
        {attributeLabel}
        {attribute}
      </div>
    )
  }
}

export default Attribute