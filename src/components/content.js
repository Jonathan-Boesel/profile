/*global $*/
import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-materialize';
import _ from 'lodash';
import InnerContent from './innerContent.js';
import { CSSTransition } from 'react-transition-group';
import '../App.css';
import tileData from '../assets/tileObject.js';
import CarouselComp from "./carousel.js"


class Content extends React.Component {

    //Intermediate click handler to manage tile coordinates 
    handleInnerClick = (key, ID) => {
        // Save original position of tile for when it shrinks back down
        let thisTile = document.getElementById(ID);
        let coords = thisTile.getBoundingClientRect();
        let cssMargin = (this.props.contentCoords.width * .005);
        let coordsX = coords.left - cssMargin;
        let coordsY = coords.top - cssMargin;

        //Calculate difference in initial tile position and parent container's
        //top left corner for it to translate when tile expands
        let tileCoords = {
            x: Math.abs(coordsX - this.props.contentCoords.left),
            y: Math.abs(coordsY - this.props.contentCoords.top)
        };
        this.props.handleTileExpandClick(key, ID, tileCoords);
    }

    render() {
        //Sets initial delay for first tile - 0seconds
        let delay = 0;

        //tileDiv construction
        let tileDiv =
            tileData.map(({ key, title, description, description2, image, link }) => {
                //Adds a .1s compounding delay to each tile so they cascade in
                delay += .1;

                //Dynamic hover event conditions
                let classNamesConst = require('classnames');
                let isHovered = "isHovered" + key;
                let tileClass = classNamesConst({
                    "tileStyle": true,
                    "z-depth-5": !this.props[isHovered],
                    "hoverBorder": this.props[isHovered],
                    "tilePointer": !this.props.tileIsExpanded
                });
                let ID = "ID" + key;
                let newDelay = delay + 's';
                let styles = {};
                let tileContent;
                let toggle;



                //Show new tile content when a tile expands, wait for it to
                //start expanding so other tiles are not shown to change
                if (this.props.tileIsExpanded === true) {
                    tileContent = null;
                    toggle = "block";
                }
                else if (this.props.tileIsExpanded === false) {
                    toggle = "none";
                    tileContent = description;
                }

                if (this.props.tileJustClosed === false) {
                    styles = { transitionDelay: newDelay, height: "49%" };
                }
                else if (this.props.tileJustClosed === true) {
                    styles = {
                        position: "relative",
                        top: this.props.tileCoords.y + "px",
                        left: this.props.tileCoords.x + "px",
                        height: "49%",
                        width: "32.33%",
                        margin: ".5%",
                        cursor: "pointer"
                    };
                }
                let newStyles = {
                    position: "relative",
                    left: this.props.tileCoords.x,
                    top: this.props.tileCoords.y,
                    width: "100%",
                    height: "100%",
                    transform: "translate(-" + this.props.tileCoords.x + "px, -" + this.props.tileCoords.y + "px)",
                    transition: "all 750ms"

                };

                //String to call/check props of current tile
                let tileKey = "tileActive" + key;
                return <CSSTransition
                    key={key}
                    in={this.props.page === 2 && this.props.wait === false && this.props.tileModalIsActive === false && this.props.tiles[key-1][tileKey] === true}
                    timeout={1500}
                    classNames={'tile'}
                    unmountOnExit
                    onEnter={this.props.onEnter}
                    onEntered={this.props.onEntered}
                    onExit={this.props.onExit}
                    onExited={this.props.onExited1}
                    >
                        <div id={ID} style={this.props.tileClicked && this.props.expandWait === false ? newStyles : styles} className = {tileClass} onMouseEnter={() => this.props.handleHoverIn(key)} onMouseLeave={() => this.props.handleHoverOut(key)} onClick={() => this.handleInnerClick(key, ID)}>
                            <div>
                                <Row>
                                    <Col s={4} className='tileImageContainer'>
                                        <Row className='tileImage z-depth-5' style= {{backgroundImage: 'url(' + image + ')', float: "left"}}>
                                            <a />
                                        </Row >
                                        <Row style={{display: toggle}}>
                                            {link}
                                        </Row>
                                    </Col>
                                    <Col s={8}>
                                        <Row className='flow-text' style={{textAlign: 'center', paddingTop: '5vh'}}>
                                            {title}
                                        </Row>
                                        <Row style={{float: "left", display: toggle}}>
                                            <div>{description2}</div>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className='tileDescription'>
                                    {tileContent}
                                </Row>
                            </div>
                        </div>                    
                    </CSSTransition>;
            });

        return (
            <Col s={12} className='content'>
                <CSSTransition
                        in={this.props.page === 1 && this.props.wait === false}
                        timeout={1000}
                        classNames={'proTiles'}
                        unmountOnExit
                        appear={true}
                        onExited={this.props.onExited2}
                    >
                        <InnerContent page={0}></InnerContent>
                </CSSTransition>
                
                <CSSTransition
                    in={this.props.page === 3 && this.props.wait === false }
                    timeout={1000}
                    classNames={'proTiles'}
                    unmountOnExit
                        onExited={this.props.onExited2}
                >
                    <InnerContent page={1}></InnerContent>
                </CSSTransition>
                
                <Row >
                    <Col s={12} l={11} className="tileDiv hide-on-med-and-down">
                        {tileDiv}
                    </Col>
                    <Col s={12} l={11} className="carouselDiv show-on-medium-and-down hide-on-large-only">
                        <CSSTransition
                            in={this.props.page === 2 && this.props.wait === false }
                            timeout={1000}
                            classNames={'proTiles'}
                            unmountOnExit
                                onExited={this.props.onExited2}
                        >
                            <CarouselComp/>
                        </CSSTransition>
                    </Col>
                    <Col s={0} l={1} className="fill hide-on-med-and-down"></Col>
                </Row>
        </Col>
        );
    }
}

export default Content;
