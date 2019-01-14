/*global $*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import NavBar from './components/navbar.js';
import NavCombo from './components/navCombo.js';
import Menu from './components/menu.js';
import { Row, Col } from 'react-materialize';
import Content from './components/content.js';
import TestContent from './components/testContent.js';
import MenuModal from './components/menuModal.js';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    }, function() {
      console.log(this.state.isActive);
    });
    if (!this.state.isActive) {
      disableBodyScroll;
    }
  }

  render() {
    return (
      <Router>
        <div className='totalContain'>
          <Row className='upperBody'>
            <Col s={12} className="z-depth-3"  >
              <NavCombo isActive={this.state.isActive} onClick={() => this.handleClick()}/>
            </Col>
          </Row>
          <Row className='lowerBody'>
            <Col s={12} l={2} className="matSidebar hide-on-med-and-down">
              <div className='sideBar hide-on-med-and-down z-depth-5 side-adjust'>
              
              </div>
            </Col>
            <Col s={12} l={10} >
              <div id="content" className='content'>
                <Content/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col s={12} className='sideBar hide-on-med-and-up'>
              This should hide on medium and up
            </Col>
          </Row>
          
          </div>
      </Router>
    );
  }
}

export default App;
