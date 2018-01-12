import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import MessageBox from './../components/messageBox'
import Title from './../components/title'

import logo from './../assets/icons/running-team.png'
import starting from './../assets/images/starting.jpg'
import race from './../assets/images/race.jpg'
import solo from './../assets/images/solo.jpg'
import alone from './../assets/images/alone.jpg'
import pretty from './../assets/images/pretty.jpg'
import together from './../assets/images/together.jpg'

import './../css/home.css'

class Home extends Component {
  render () {
    return (
      <section className="home">
        <MessageBox {...this.props} />
        <img className="title-img" src={starting} alt="the starting line" />
        <div className="content top-section">
          <Title title="Let's talk about running." />
          <Row>
            <Col lg="12">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="8" md="6" sm="12" xs="12">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col lg="4" md="6" sm="8" xs="12">
              <img className="main-img" src={solo} alt="running solo" />
            </Col>
          </Row>
          <Title title="It doesn't have to be lonely." />
          <Row>
            <Col md="4" sm="8" xs="12">
              <img className="main-img highlight-img" src={race} alt="people racing" />
              <p className="caption">Running can be competitive, impulsive, and exhilarating.</p>
            </Col>
            <Col md="4" sm="8" xs="12">
              <img className="main-img highlight-img" src={alone} alt="peaceful running" />
              <p className="caption">Or determined, rigorous, and unstoppable.</p>
            </Col>
            <Col md="4" sm="8" xs="12">
              <img className="main-img highlight-img" src={pretty} alt="running and enjoying nature" />
              <p className="caption">Or relaxing, peaceful, and self-actualizing.</p>
            </Col>
          </Row>
          <Row className="spacer">
            <Col lg="12">
              <p className="highlight">But whatever it is for you, it doesn't mean you have to do it alone.</p>
            </Col>
          </Row>
          <Row>
            <Col md="6" sm="4"></Col>
            <Col md="6" sm="8" xs="12">
              <img className="main-img" src={together} alt="running together" />
              <p className="highlight">It's a team sport.</p>
            </Col>
          </Row>
        </div>
        <div className="content final-section">
          <Title title="Squad goals: Run." />
          <Row>
            <Col lg="2" md="3" sm="4" xs="6">
              <img className="main-img" src={logo} alt="jive race = team racing" />
            </Col>
            <Col lg="8" md="6" sm="12" xs="12">
              <p className="highlight logo-caption">At Jive Race we're here for you and your team.</p>
            </Col>
            <Col lg="2" md="3" sm="6" xs="6">
              <div className="join"><a href="/signup">Join</a></div>
            </Col>
          </Row>
        </div>
      </section>
    )
  }
}

export default Home

/*
        <div className="feature-img">
          <div className="feature-padding"></div>
        </div>
*/

/*        <Row>
            <Col lg="12">
              <img className="main-img" src={starting} alt="the starting line" />
            </Col>
          </Row>
          <Row className="spacer"></Row>
*/

// <Container title="Let's Jive." content={content} cssLabel="home" {...this.props} />
