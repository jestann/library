import React, { Component } from 'react'
import Attribute from './attribute'
import './../css/attribute.css'

class AttributeList extends Component {
  render () {
    let items = this.props.items.map((item, i) => ( 
      <Attribute 
        keyed={i}
        content={item.content} // label not used in a list
        link={item.link}
        postlink={item.postlink}
        long={item.long}
      /> 
    ))
    
    return ( 
      <div className='attribute'>
        <div className='attribute-list-header'>{this.props.header}</div>
        <div className='attribute-list'>{items}</div>
      </div>
    )
  }
}

export default AttributeList