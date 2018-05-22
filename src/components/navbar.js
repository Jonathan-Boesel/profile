/*global $*/
import React from 'react';
import Menu from './menu.js'
import { Row, Col } from 'react-materialize'

const NavBar = () => (
    <Row className='navBar'>
        <Col s={6}>
            <p id="logo">Jonathan Boesel</p>
        </Col>
        <Col s={4}></Col>
        <Col s={2} className="right-align">
            <Menu/>
        </Col>
    </Row>
);


export default NavBar;
