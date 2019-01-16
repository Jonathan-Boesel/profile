/*global $*/
import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-materialize';
import _ from 'lodash';
import InnerContent from './innerContent.js';
import { CSSTransition } from 'react-transition-group';
import '../App.css';
import tileData from '../assets/tileObject.js';

let pageMax = 3;
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            //no tile is showing in initial state (page = 1 not 2)
            tileIsActive: false,
            //modal is not open in initial state
            tileModalIsActive: false,
            //waits for transition to finish before starting next page trans.
            wait: false,
            //waits for tiles to fall before expanding
            expandWait: false,
            //no tile is clicked in initial state
            tileClicked: false,
            //no previous tile clicked in initial state (used when a tile is expanded)
            lastTileClicked: null,
            //state for when tile is currently ANIMATING, handles double click edge case
            tileIsExpanding: false,
            //tile is/is not in its expanded state
            tileIsExpanded: false,
            //state to cancel tile hover function when tiles are reappearing
            fall: false,
            //1-6 states to handle hovered conditions
            isHovered1: false,
            isHovered2: false,
            isHovered3: false,
            isHovered4: false,
            isHovered5: false,
            isHovered6: false,
            //Tile array for which tile should remain when one is clicked 
            tiles: [
                { tileActive1: false },
                { tileActive2: false },
                { tileActive3: false },
                { tileActive4: false },
                { tileActive5: false },
                { tileActive6: false },
            ],
            tileCoords: {
                x: null,
                y: null
            },
            contentCoords: {},
            tileJustClosed: false,
            duration: 2000
        };
    }

    handleTileClick = () => {
        this.setState({
            tileModalIsActive: !this.state.tileModalIsActive,
            tileIsActive: !this.state.tileIsActive,
            wait: true
        }, function() {
            console.log(this.state.tileModalIsActive);
        });
    }

    //Handles hover over for border changes, covers falling, expanding and expanded
    //to ignore hovers
    handleHoverIn = (key) => {
        let state = "isHovered" + key;
        if (this.state.fall === false && !this.state.tileIsExpanded && !this.state.tileIsExpanding) {
            this.setState({
                [state]: true
            });
        }
    }
    handleHoverOut = (key) => {
        let state = "isHovered" + key;
        if (this.state.fall === false && !this.state.tileIsExpanded && !this.state.tileIsExpanding) {
            this.setState({
                [state]: false
            });
        }
    }

    handleTileExpandClick = (key, ID) => {
        let tiles = [];

        //If the tile just clicked is not the same as the last tile clicked,
        //it is a new tile and we need to expand it
        if (this.state.lastTileClicked !== key && this.state.tileIsExpanding === false) {

            //Save original position of tile for when it shrinks back down
            let thisTile = document.getElementById(ID);
            let coords = thisTile.getBoundingClientRect();
            let cssMargin = (this.state.contentCoords.width * .005);
            let coordsX = coords.left - cssMargin;
            let coordsY = coords.top - cssMargin;

            //Calculate difference in initial tile position and parent container's
            //top left corner for it to translate when tile expands
            let tileCoords = {
                x: Math.abs(coordsX - this.state.contentCoords.left),
                y: Math.abs(coordsY - this.state.contentCoords.top)
            };

            //Construct tiles object in form of 'tileActive#: true/false' to 
            //push to state
            for (let i = 0; i < this.state.tiles.length; i++) {
                let keyCall = 1 + +i;
                let stateCall = "tileActive" + keyCall;
                if (i !== key - 1) {
                    tiles.push({
                        [stateCall]: false
                    });
                }
                else {
                    tiles.push({
                        [stateCall]: true
                    });
                }
            }

            //Waits for tile to expand to change content so animations are smoother
            let tileExpanded = () => {
                setTimeout(() => {
                    this.setState({
                        tileIsExpanding: false,
                        tileIsExpanded: true
                    });
                }, 2000);
            };
            let hoverState = "isHovered" + key;
            this.setState({
                tiles,
                //waits to expand
                expandWait: true,
                //waits on actual expantion
                tileIsExpanding: true,
                tileClicked: true,
                lastTileClicked: key,
                tileCoords: tileCoords,
                tileJustClosed: false,
                [hoverState]: false
            });
            tileExpanded();
        }
        //If the tile just clicked is the same as the last tile clicked, 
        //the tile will be closing and we need reset 
        else if (this.state.lastTileClicked === key && this.state.tileIsExpanding === false) {
            let tiles = [
                { tileActive1: true },
                { tileActive2: true },
                { tileActive3: true },
                { tileActive4: true },
                { tileActive5: true },
                { tileActive6: true }
            ];
            let reactivateTiles = () => {
                setTimeout(() => {
                    this.setState({
                        tileIsExpanding: false,
                        tiles,
                        tileJustClosed: false
                    });
                }, 500);
            };
            let tileCoords = {
                x: null,
                y: null
            };
            this.setState({
                tileIsExpanded: false,
                tileIsExpanding: true,
                tileCoords,
                tileClosing: true,
                // wait: true,
                tileClicked: false,
                lastTileClicked: null,
                tileJustClosed: true
            });
            reactivateTiles();
        }
    }

    componentDidMount() {
        //Set content div coords for user viewport
        const contentEle = document.getElementById("content");
        let contentCoords = contentEle.getBoundingClientRect();
        this.setState({
            contentCoords: contentCoords
        });
        var handleScrollDown = () => {
            console.log("scroll");
            if (this.state.page < pageMax && this.state.tileJustClosed !== true) {
                this.setState({
                    page: this.state.page + 1,
                    wait: true,
                    tileIsExpanded: false,
                    tileModalIsActive: false,
                    tileJustClosed: false
                }, function() {
                    console.log(this.state.page);
                });
            }
            else {
                return;
            }
        };
        var handleScrollUp = () => {
            console.log("scroll");
            if (this.state.page > 1 && this.state.tileJustClosed !== true) {
                this.setState({
                    page: this.state.page - 1,
                    wait: true,
                    tileJustClosed: false,
                    tileIsExpanded: false
                }, function() {
                    console.log(this.state.page);
                });
            }
            else {
                return;
            }
        };
        //Throttles scroll events to wait for transition animations
        var throttleBack = _.throttle(function(event) {
            if (event.originalEvent.wheelDelta >= 0) {
                console.log('Scroll up');
                handleScrollUp();
            }
            else {
                console.log('Scroll down');
                handleScrollDown();
            }
        }, 2000, { 'trailing': false });

        $(window).bind('mousewheel', throttleBack);

    }
    componentWillUpdate() {
        //Handles when to show the tile page based on page state. Extra conditions
        //to keep tiles from resetting when one is expanded
        if (this.state.page === 2 && this.state.tileIsActive !== true && this.state.tileClicked !== true) {
            let tiles = [
                { tileActive1: true },
                { tileActive2: true },
                { tileActive3: true },
                { tileActive4: true },
                { tileActive5: true },
                { tileActive6: true }
            ];
            this.setState({
                tileIsActive: true,
                tiles
            });
        }
        //Handles a page change when a tile is currently expanded
        else if (this.state.page !== 2 && this.state.tileIsActive === true) {
            let tiles = [
                { tileActive1: false },
                { tileActive2: false },
                { tileActive3: false },
                { tileActive4: false },
                { tileActive5: false },
                { tileActive6: false }
            ];
            this.setState({
                tileIsExpanded: false,
                tileIsActive: false,
                tiles,
                tileJustClosed: false,
                tileClicked: false,
                lastTileClicked: null,
            });
        }
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
                    "z-depth-5": !this.state[isHovered],
                    "hoverBorder": this.state[isHovered]
                });
                let ID = "ID" + key;
                let newDelay = delay + 's';
                let styles = {};
                let tileContent;
                let toggle;

                //Show new tile content when a tile expands, wait for it to
                //start expanding so other tiles are not shown to change
                if (this.state.tileIsExpanded === true) {
                    tileContent = null;
                    toggle = "block";
                }
                else if (this.state.tileIsExpanded === false) {
                    toggle = "none";
                    tileContent = description;
                }

                if (this.state.tileJustClosed === false) {
                    styles = { transitionDelay: newDelay, height: "39vh" };
                }
                else if (this.state.tileJustClosed === true) {
                    styles = {
                        position: "relative",
                        top: this.state.tileCoords.y + "px",
                        left: this.state.tileCoords.x + "px",
                        height: "39vh",
                        width: "32.33%",
                        margin: ".5%"
                    };
                }
                let newStyles = {
                    position: "relative",
                    left: this.state.tileCoords.x,
                    top: this.state.tileCoords.y,
                    width: "100%",
                    height: "100%",
                    transform: "translate(-" + this.state.tileCoords.x + "px, -" + this.state.tileCoords.y + "px)",
                    transition: "all 750ms"

                };

                //String to call/check state of current tile
                let tileKey = "tileActive" + key;
                return <CSSTransition
                    key={key}
                    in={this.state.page === 2 && this.state.wait === false && this.state.tileModalIsActive === false && this.state.tiles[key-1][tileKey] === true}
                    timeout={1500}
                    classNames={'tile'}
                    unmountOnExit
                    onEnter={() => {
                        this.setState({
                            fall:true
                        });
                    }}
                    onEntered={() => {
                        this.setState({
                            fall:false
                        });
                    }}
                    onExit={() => {
                        this.setState({
                            fall:true
                        });
                    }}
                    onExited={() => {
                            this.setState({
                              wait: false,
                              expandWait: false,
                              fall: false
                            });
                          }}
                    >
                        <div id={ID} style={this.state.tileClicked && this.state.expandWait === false ? newStyles : styles} className = {tileClass} onMouseEnter={() => this.handleHoverIn(key)} onMouseLeave={() => this.handleHoverOut(key)} onClick={() => this.handleTileExpandClick(key, ID)}>
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
                        in={this.state.page === 1 && this.state.wait === false}
                        timeout={1000}
                        classNames={'proTiles'}
                        unmountOnExit
                        appear={true}
                        onExited={() => {
                            this.setState({
                              wait: false,
                            });
                          }}
                    >
                        <InnerContent page={0}></InnerContent>
                </CSSTransition>
                
                <CSSTransition
                    in={this.state.page === 3 && this.state.wait === false }
                    timeout={1000}
                    classNames={'proTiles'}
                    unmountOnExit
                        onExited={() => {
                            this.setState({
                              wait: false,
                            });
                          }}
                >
                    <InnerContent page={1}></InnerContent>
                </CSSTransition>
                
                <Row >
                    <Col s={11} l={12}className="tileDiv">
                        {tileDiv}
                    </Col>
                    <Col s={0} l={1} className="fill hide-on-med-and-down"></Col>
                </Row>
        </Col>
        );
    }
}

export default Content;
