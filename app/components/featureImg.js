import React, { Component } from 'react'
import './../css/featureimg.css'

class FeatureImg extends Component {
  render () {
    let imgStyle = {backgroundImage: "url('" + this.props.img + "')"}
    // let ratio = (this.props.dimensionY / this.props.dimensionX) * 100
    // let afterStyle = {paddingTop: ratio + "%"}
    return (
      <div className="feature-img" style={imgStyle}>
        <div className="feature-padding"></div>
      </div>
    )
  }
}

export default FeatureImg
