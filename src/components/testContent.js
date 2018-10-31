/*global $*/
import React from 'react';
import { Link } from "react-router-dom";
import { If, Then, Else } from 'react-if';
import { Row, Col, MediaBox } from 'react-materialize'
import data from '../assets/contentObject'
import _ from 'lodash'
import throttle from 'lodash'
import InnerContent from './innerContent.js'
import Tile from './tile.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../App.css';
import tileData from '../assets/tileObject.js';
import TestTile from './testTile.js';

class TestContent extends React.Component {
    render() {

        const items = tileData.map(({ title, description, key }) => (
            <CSSTransition
                key={key}
                timeout={2000}
                classNames={'proTiles'}
                appear={true}
                unmountOnExit
                >
                    <Col s={4}>
                        <Row>
                            <Row className='tileTitle'>
                                {title}
                            </Row>
                            <CSSTransition
                                in={true}
                                timeout={2000}
                                classNames={'test'}
                                appear={true}
                                unmountOnExit
                                >
                                    <Row className='tileDescription'>
                                        {description}
                                    </Row>
                            </CSSTransition>
                        </Row>
                    </Col>
            </CSSTransition>
        ));

        return (

            <TransitionGroup className='tileWrapper'>
                {items}
            </TransitionGroup>

        )
    }
}
export default TestContent;
