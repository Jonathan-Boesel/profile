/*global $*/
import React from 'react';
import MenuModal from './menuModal.js';
import { Row, Col } from 'react-materialize';
import { Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { CSSTransition } from 'react-transition-group';

class NavCombo extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isActive: false
    //     };
    // }

    // handleClick = () => {
    //     this.setState({
    //         isActive: !this.state.isActive
    //     }, function() {
    //         console.log(this.state.isActive);
    //     });
    //     if (!this.state.isActive) {
    //         disableBodyScroll
    //     }
    // }

    render() {
        console.log("XXXX" + (this.props.isActive))


        const menuState = !this.props.isActive;

        return (
            <div>
                <Row className='navBar'>
                    <Col s={6}>
                        <p id="logo">Jonathan Boesel</p>
                    </Col>
                    <Col s={4}></Col>
                    <Col s={2} className="right-align">
                        <Link to={`/menu/` + menuState}>
                            <div className="menu" onClick={() => this.props.onClick()}>
                                <div className={this.props.isActive ?  "change1" : "bar1"}></div>
                                <div className={this.props.isActive ?  "change2" : "bar2"}></div>
                            </div>
                        </Link>
                        
                    </Col>
                </Row>
                    <CSSTransition
                        in={this.props.isActive}
                        timeout={2000}
                        classNames={'modalMenu'}
                        unmountOnExit
                    >
                        <MenuModal show={this.props.isActive}></MenuModal>
                    </CSSTransition>
                    
            </div>
        );
    }
}

export default NavCombo;
