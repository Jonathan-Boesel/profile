/*global $*/
import React from 'react';
import MenuModal from './menuModal.js';
import { Row, Col } from 'react-materialize';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

class NavCombo extends React.Component {

    render() {
        const menuState = !this.props.isActive;

        return (
            <div>
                <Row className='upperBody'>
                    <Col s={6} className='upperBody'>
                        <p className="flow-text" style={{color: "#2fb595", whiteSpace: "nowrap"}} id="logo">Jonathan Boesel</p>
                    </Col>
                    <Col s={4}></Col>
                    <Col s={2} className="right-align menuFix">
                        <Link to={`/menu/` + menuState}>
                            <div className="menu" onClick={() => this.props.onMenuClick()}>
                                <div className={this.props.isActive ?  "change1" : "bar1"}></div>
                                <div className={this.props.isActive ?  "change2" : "bar2"}></div>
                            </div>
                        </Link>
                        
                    </Col>
                </Row>
                <Row >
                    <CSSTransition
                        in={this.props.isActive}
                        timeout={500}
                        classNames={'modalMenu'}
                        unmountOnExit
                    >
                        <MenuModal show={this.props.isActive} handleMenuModalClick={(line) => this.props.handleMenuModalClick(line)}></MenuModal>
                    </CSSTransition>
                </Row>
            </div>
        );
    }
}

export default NavCombo;
