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
import TileModal from './tileModal.js';
// import Delayed from 'react-delayed';

let pageMax = Object.keys(data).length + 1;

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            tileIsActive: false,
            tileModalIsActive: false,
            wait: false
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

    componentDidMount() {
        console.log(data);
        var handleScrollDown = () => {
            console.log("scroll");
            if (this.state.page < pageMax) {
                this.setState({
                    page: this.state.page + 1,
                    wait: true,
                    tileModalIsActive: false
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
            if (this.state.page > 1) {
                this.setState({
                    page: this.state.page - 1,
                    wait: true
                }, function() {
                    console.log(this.state.page);
                });
            }
            else {
                return;
            }
        };
        var throttleBack = _.throttle(function(event) {
            if (event.originalEvent.wheelDelta >= 0) {
                console.log('Scroll up');
                handleScrollUp()

            }
            else {
                console.log('Scroll down');
                handleScrollDown()
            }
        }, 2000, { 'trailing': false });

        $(window).bind('mousewheel', throttleBack);

    }
    componentDidUpdate() {
        if (this.state.page === 3 && this.state.tileIsActive !== true && this.state.tileModalIsActive !== true) {
            this.setState({
                tileIsActive: true
            })
        }
        else if (this.state.page !== 3 && this.state.tileIsActive === true && this.state.tileModalIsActive === true) {
            this.setState({
                tileIsActive: false
            })
        }
    }

    render() {
        let pageCurrent = null;
        const tileIsActive = this.state.tileIsActive;
        let delay = 0;

        const tileDiv = tileData.map(({ key, title, description }) => {
            delay += .1;
            // console.log(delay)
            let newDelay = delay + 's'
            let styles = { transitionDelay: newDelay };
            // console.log(styles)

            return <CSSTransition
                    key={key}
                    in={this.state.page ===3 && this.state.wait === false && this.state.tileModalIsActive === false}
                    timeout={1000}
                    classNames={'tile'}
                    // appear={true}
                    unmountOnExit
                    onExited={() => {
                            this.setState({
                              wait: false,
                            });
                          }}
                    >
                        <div style={styles} className='tileWrapper' onClick={() => this.handleTileClick()}>
                            <Col s={4}>
                                <Row>
                                    <Row className='tileTitle'>
                                        {title}
                                    </Row>
                                    <Row className='tileDescription'>
                                        {description}
                                    </Row>
                                </Row>
                            </Col>
                        </div>
                    </CSSTransition>
        })
        // console.log('Title thing' + tileDiv)
        // console.log('****' + tileIsActive)

        // let singleTile =
        //     <Col s={3}>
        //             <Tile></Tile>
        //         </Col>;
        // let tileNumber = 5
        // var i
        // let pageTiles = []
        // for (i = 0; i < tileNumber; i++) {
        //     pageTiles.push(
        //         singleTile
        //     )
        // }
        // let tilesFull = 

        // if (this.state.page < 3) {
        //     pageCurrent = <InnerContent page={this.state.page-1}></InnerContent>
        // }

        // else if (this.state.page == 3) {
        //     // pageCurrent = <Tile page={this.state.page}></Tile>
        //     pageCurrent = (


        //         <CSSTransition
        //             in={tileIsActive}
        //             timeout={2000}
        //             classNames='proTiles'
        //             mountOnEnter
        //             unmountOnExit>
        //             <Tile></Tile>
        //         </CSSTransition>
        //     )
        // }
        return (
            <Col s={12} l={10}>
                <CSSTransition
                        in={this.state.page === 1 && this.state.wait === false}
                        timeout={2000}
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
                    in={this.state.page === 2 && this.state.wait === false }
                    timeout={2000}
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
                
                {tileDiv}
                
                <CSSTransition
                    in={this.state.tileModalIsActive && this.state.wait === false}
                    timeout={2000}
                    classNames={'tileModal'}
                    unmountOnExit
                        onExited={() => {
                            this.setState({
                              wait: false,
                            });
                          }}
                >
                    <TileModal onClick={() => this.handleTileClick()}/>
                </CSSTransition>
                
        </Col>
        );
    }
}

export default Content;
