/*global $*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar.js'
import { Row, Col } from 'react-materialize'
import Content from './components/content.js'


const App = () =>
  <Router>
    <div>
      <Row>
        <Col s={12}>
          <NavBar/>
        </Col>
      </Row>
      <Row className='lowerBody'>
        <Col s={12} l={2} className='sideBar hide-on-med-and-down'></Col>
        <Col s={12} l={10} className='content'>
        
          <Content/>
        </Col>
      </Row>
      <Row>
        <Col s={12} className='sideBar hide-on-med-and-up'>
          This should hide on medium and up
        </Col>
      </Row>
    </div>
  </Router>;


export default App;