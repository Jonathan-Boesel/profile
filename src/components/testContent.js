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
import TileModal from './tileModal.js';

class TestContent extends React.Component {
    render() {




        return (
            <CSSTransition
                in={true}
                timeout={2000}
                classNames={'modalMenu'}
                unmountOnExit
            >
                <TileModal/>
            </CSSTransition>

        )
    }
}
export default TestContent;
