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

// let pageMax = Object.keys(data).length + 1;
let pageMax = 3

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            tileIsActive: false,
            tileModalIsActive: false,
            wait: false,
            tileClicked: false,
            lastTileClicked: null,
            tiles: [
                { tileActive1: false },
                { tileActive2: false },
                { tileActive3: false },
                { tileActive4: false },
                { tileActive5: false },
                { tileActive6: false },
            ],

            tileExpand1: false,
            tileExpand2: false,
            tileExpand3: false,
            tileExpand4: false,
            tileExpand5: false,
            tileExpand6: false,
            tileTransition1: "tile",
            tileTransition2: "tile",
            tileTransition3: "tile",
            tileTransition4: "tile",
            tileTransition5: "tile",
            tileTransition6: "tile",
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


    // Using childfactory set new exit animation to expand then enter new identical element by using tileExpand# states to choose 
    // and see if it will match up without a blink 
    delayState = function() {
        setTimeout(() => {
            this.setState({
                tileIsActive: !this.state.tileIsActive,
                wait: true
            })
        }, 500);
    };

    handleTileExpandClick = (key) => {
        console.log(key)
        console.log(this.state.tiles)
        let expandState = "tileExpand" + key
        let expandWhich = {
            ["tileExpand" + key]: !this.state[expandState]
        }
        console.log(expandWhich)
        let tiles = [];
        console.log("length" + this.state.tiles.length)

        if (this.state.lastTileClicked !== key) {
            for (let i = 0; i < this.state.tiles.length; i++) {
                let keyCall = 1 + +i
                let stateCall = "tileActive" + keyCall
                // console.log(stateCall)
                // console.log("New click state" + this.state.tiles[i][stateCall])
                if (i !== key - 1) {

                    tiles.push({
                        [stateCall]: false
                    })
                }
                else {
                    tiles.push({
                        [stateCall]: true
                    })
                }

                // if (i !== key - 1) {
                //     this.setState({
                //         tiles[i][stateCall]: false
                //     }, () => {
                //         console.log(this.state.tiles[i][stateCall])
                //     })
                // }
            }
            console.log(tiles)
            this.setState({
                tiles,
                tileClicked: true,
                lastTileClicked: key
            })
        }
        else if (this.state.lastTileClicked === key) {
            let tiles = [
                { tileActive1: true },
                { tileActive2: true },
                { tileActive3: true },
                { tileActive4: true },
                { tileActive5: true },
                { tileActive6: true }
            ]
            this.setState({
                tiles,
                tileClicked: false,
                lastTileClicked: null

            });
        }



        // let tiles = this.state.tiles.map({

        // })
        // this.setState({
        //     expandWhich,
        // }, () => {

        //     this.delayState()
        //     console.log("new state " + this.state.tileExpand1)
        //     console.log((this.state.page === 3 && this.state.wait === false && (this.state.tileModalIsActive === false || this.state[expandState] === true)))
        // })

    }

    componentDidMount() {
        let key = 1
        let callKey = "tileActive" + key
        // console.log("FFFFFFF" + this.state.tiles[0][callKey]);



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
    componentWillUpdate() {
        //Test
        if (this.state.page === 3 && this.state.tileIsActive !== true && this.state.tileClicked !== true) {
            let tiles = [
                { tileActive1: true },
                { tileActive2: true },
                { tileActive3: true },
                { tileActive4: true },
                { tileActive5: true },
                { tileActive6: true }
            ]
            this.setState({
                tileIsActive: true,
                tiles

            });
        }
        else if (this.state.page !== 3 && this.state.tileIsActive === true) {
            let tiles = [
                { tileActive1: false },
                { tileActive2: false },
                { tileActive3: false },
                { tileActive4: false },
                { tileActive5: false },
                { tileActive6: false }
            ]
            this.setState({
                tileIsActive: false,
                tileActive1: false,
                tileActive2: false,
                tileActive3: false,
                tileActive4: false,
                tileActive5: false,
                tileActive6: false,
            })
        }
        //     if (this.state.page === 3 && this.state.tileIsActive !== true) {
        //         this.setState({
        //             tileIsActive: true
        //         })
        //     }
        //     else if (this.state.page !== 3 && this.state.tileIsActive === true) {
        //         this.setState({
        //             tileIsActive: false
        //         })
        //     }
    }
    //Original
    //     if (this.state.page === 3 && this.state.tileIsActive !== true && this.state.tileModalIsActive !== true) {
    //         this.setState({
    //             tileIsActive: true
    //         })
    //     }
    //     else if (this.state.page !== 3 && this.state.tileIsActive === true && this.state.tileModalIsActive === true) {
    //         this.setState({
    //             tileIsActive: false
    //         })
    //     }
    // }

    render() {
        let pageCurrent = null;
        const condition = this.state.tileIsActive;
        let delay = 0;
        const childFactoryCreator = (classNames) => (
            (child) => (
                React.cloneElement(child, {
                    classNames
                })
            )
        );

        //Trial tileDiv construction
        let tileDiv =

            tileData.map(({ key, title, description }) => {
                delay += .1;
                // console.log(delay)
                let newDelay = delay + 's'
                let styles = { transitionDelay: newDelay };
                let expandStateClass = "this.state.tileExpand" + key
                let expandClass = "tileExpand" + key
                let classNames = this.state.tileTrasition + key
                let tileKey = "tileActive" + key
                console.log("** **")
                console.log(this.state[expandClass])
                // console.log("This tile state" + tileKey)
                // console.log(this.state.tiles[key - 1][tileKey])
                // let inIs;

                // if (this.state.page === 3 && this.state.wait === false && this.state.tileModalIsActive === false) {
                //     inIs = true;
                // }
                // else if (this.state[expandClass] === true) {
                //     inIs = true
                // }
                // else {
                //     inIs = false
                // }

                // console.log(inIs)

                return <CSSTransition
                    key={key}
                    in={this.state.page === 3 && this.state.wait === false && this.state.tileModalIsActive === false && this.state.tiles[key-1][tileKey] === true}
                    
                    timeout={1500}

                    classNames={'tile'}
                    // appear={true}
                    unmountOnExit

                    onExited={() => {
                            this.setState({
                              wait: false,
                            });
                          }}
                    >
                        <div style={styles} className='tileWrapper' className={this.state.tileClicked ? "tileExpand" : "null"} onClick={() => this.handleTileExpandClick(key)}>
                            <Col s={this.state.tileClicked ? "{12}" : "{4}"} className='tileStyle'>
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

        //Original tileDiv construction
        // let tileDiv = tileData.map(({ key, title, description }) => {
        //     delay += .1;
        //     // console.log(delay)
        //     let newDelay = delay + 's'
        //     let styles = { transitionDelay: newDelay };
        //     let expandStateClass = "this.state.tileExpand" + key
        //     let expandClass = "tileExpand" + key
        //     let tileActive = "tileActive" + key;
        //     let classNames = this.state.tileTrasition + key
        //     if (this.state[expandClass] === true) {
        //         console.log("Tile Clicked")
        //     }

        //     let inIs;

        //     if (this.state.page === 3 && this.state.wait === false && this.state.tileModalIsActive === false) {
        //         inIs = true;
        //     }
        //     else if (this.state[expandClass] === true) {
        //         inIs = true
        //     }
        //     else {
        //         inIs = false
        //     }

        //     let handleIn = () => {
        //         inIs = true
        //     }


        //     return <CSSTransition
        //             key={key}
        //             in={this.state[tileActive]}

        //             timeout={1500}

        //             classNames={'tile'}
        //             // appear={true}
        //             unmountOnExit

        //             onExited={() => {
        //                     this.setState({
        //                       wait: false,
        //                     });
        //                   }}
        //             >
        //                 <div style={styles} className='tileWrapper' className={this.state[expandClass] ? "tileExpand" : "null"} onClick={() => handleIn()} onClick={() => this.handleTileExpandClick(key)}>
        //                     <Col s={4} className='tileStyle'>
        //                         <Row>
        //                             <Row className='tileTitle'>
        //                                 {title}
        //                             </Row>
        //                             <Row className='tileDescription'>
        //                                 {description}
        //                             </Row>
        //                         </Row>
        //                     </Col>
        //                 </div>
        //             </CSSTransition>


        // })
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
        // let tilesPage;
        // if (this.state.page === 3 && this.state.wait === false) {
        //     tilesPage = tileDiv
        // }

        return (
            <Col s={12}>
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
                
                
                
                {/*<CSSTransition
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
                </CSSTransition>*/}
                
        </Col>
        );
    }
}

export default Content;
