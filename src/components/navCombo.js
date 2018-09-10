/*global $*/
import React from 'react';
import MenuModal from './menuModal.js';
import { Row, Col } from 'react-materialize';
import { Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
class NavCombo extends React.Component {

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
            disableBodyScroll
        }
    }

    render() {
        const { menuState } = this.state.isActive;
        return (
            <div>
                <Row className='navBar'>
                    <Col s={6}>
                        <p id="logo">Jonathan Boesel</p>
                    </Col>
                    <Col s={4}></Col>
                    <Col s={2} className="right-align">
                        <Link to={`/menu/${this.state.isActive}`}>
                            <div className="menu" onClick={this.handleClick}>
                                <div className={this.state.isActive ? "change1" : "bar1"}></div>
                                <div className={this.state.isActive ? "change2" : "bar2"}></div>
                            </div>
                        </Link>
                        
                    </Col>
                </Row>
                    <MenuModal show={this.state.isActive}></MenuModal>
            </div>
        );
    }
}

export default NavCombo;
