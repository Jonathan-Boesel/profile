/*global $*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import NavBar from './components/navbar.js';
import NavCombo from './components/navCombo.js';
import Menu from './components/menu.js';
import { Row, Col } from 'react-materialize';
import Content from './components/content.js';
import TestContent from './components/testContent.js';
import MenuModal from './components/menuModal.js';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import SideBarComp from './components/sidebar.js'
import SideBarCompSmall from './components/sidebarSmall.js'
import CarouselComp from './components/carousel.js'
import _ from 'lodash';

let pageMax = 2;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //Menu State
      menuIsActive: false,

      //Content States - All
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

  handleSidebarClick = (line) => {
    if (this.state.wait === false) {
      this.setState({
        page: line,
        wait: true
      })
    }
  }

  //Handles clicking the burger menu Icon 
  handleMenuClick = () => {
    this.setState({
      menuIsActive: !this.state.menuIsActive
    }, function() {
      console.log(this.state.menuIsActive);
    });
    if (!this.state.menuIsActive) {
      disableBodyScroll;
    }
  }

  handleMenuModalClick = (line) => {
    if (this.state.wait === false) {
      this.setState({
        menuIsActive: false,
        page: line,
        wait: true,
      })
    }
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

  //CSSTransitions functions
  onEnter = () => {
    this.setState({
      fall: true
    });
  }
  onEntered = () => {
    this.setState({
      fall: false
    });
  }
  onExit = () => {
    this.setState({
      fall: true
    });
  }
  onExited1 = () => {
    this.setState({
      wait: false,
      expandWait: false,
      fall: false
    });
  }
  onExited2 = () => {
    this.setState({
      wait: false
    });
  }

  handleTileExpandClick = (key, ID, tileCoords) => {
    let tiles = [];

    //If the tile just clicked is not the same as the last tile clicked,
    //it is a new tile and we need to expand it
    if (this.state.lastTileClicked !== key && this.state.tileIsExpanding === false) {

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
    // var handleScrollDown = () => {
        //   if (this.state.page < pageMax && this.state.tileJustClosed !== true) {
        //     this.setState({
        //       page: this.state.page + 1,
        //       wait: true,
        //       tileIsExpanded: false,
        //       tileModalIsActive: false,
        //       tileJustClosed: false
        //     }, function() {
        //       console.log(this.state.page);
        //     });
        //   }
        //   else {
        //     return;
        //   }
        // };
        // var handleScrollUp = () => {
        //   console.log("scroll");
        //   if (this.state.page > 1 && this.state.tileJustClosed !== true) {
        //     this.setState({
        //       page: this.state.page - 1,
        //       wait: true,
        //       tileJustClosed: false,
        //       tileIsExpanded: false
        //     }, function() {
        //       console.log(this.state.page);
        //     });
        //   }
        //   else {
        //     return;
        //   }
        // };
        // //Throttles scroll events to wait for transition animations
        // var throttleBack = _.throttle(function(event) {
        //   if (event.originalEvent.wheelDelta >= 0) {
        //     console.log('Scroll up');
        //     handleScrollUp();
        //   }
        //   else {
        //     console.log('Scroll down');
        //     handleScrollDown();
        //   }
        // }, 2000, { 'trailing': false });
    
        // $(window).bind('mousewheel', throttleBack);

  }
  componentWillUpdate() {
    //Handles when to show the tile page based on page state. Extra conditions
    //to keep tiles from resetting when one is expanded
    if (this.state.page === 1 && this.state.tileIsActive !== true && this.state.tileClicked !== true) {
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
    else if (this.state.page !== 1 && this.state.tileIsActive === true) {
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
    return (
      <Router>
        <div className='totalContain'>
          <Row className='rowAdjust'>
            <Col s={12} className="z-depth-3 upperBody upperBodyGloss">
                <NavCombo 
                  isActive={this.state.menuIsActive} 
                  onMenuClick={() => this.handleMenuClick()} 
                  handleMenuModalClick={(line) => this.handleMenuModalClick(line)}
                />
            </Col>
          </Row>
          <Row className='lowerBody rowAdjust' id='content'>
            {/*<Col s={12} l={2} className="matSidebar hide-on-med-and-down">
              <div className='sideBar hide-on-med-and-down z-depth-5 side-adjust'>
                <SideBarComp
                  page={this.state.page}
                  handleSidebarClick={(line) => this.handleSidebarClick(line)}
                />
              </div>
            </Col>*/}
            {/*<Col s={12} l={12} id="content" className='colAdjust'>*/}
                <Content
                  page={this.state.page}
                  tileIsActive={this.state.tileIsActive}
                  tileModalIsActive={this.state.tileModalIsActive}
                  wait={this.state.wait}
                  expandWait={this.state.expandWait}
                  tileClicked={this.state.tileClicked}
                  lastTileClicked={this.state.lastTileClicked}
                  tileIsExpanding={this.state.tileIsExpanding}
                  tileIsExpanded={this.state.tileIsExpanded}
                  fall={this.state.fall}
                  isHovered1={this.state.isHovered1}
                  isHovered2={this.state.isHovered2}
                  isHovered3={this.state.isHovered3}
                  isHovered4={this.state.isHovered4}
                  isHovered5={this.state.isHovered5}
                  isHovered6={this.state.isHovered6}
                  tiles={this.state.tiles}
                  tileCoords={this.state.tileCoords}
                  contentCoords={this.state.contentCoords}
                  tileJustClosed={this.state.tileJustClosed}
                  handleTileClick={() => this.handleTileClick()}
                  handleHoverIn={(key) => this.handleHoverIn(key)}
                  handleHoverOut={(key) => this.handleHoverOut(key)}
                  handleTileExpandClick={(key, ID, tileCoords) => this.handleTileExpandClick(key, ID, tileCoords)}
                  onEnter={() => this.onEnter()}
                  onEntered={() => this.onEntered()}
                  onExit={() => this.onExit()}
                  onExited1={() => this.onExited1()}
                  onExited2={() => this.onExited2()}
                />
            {/*</Col>*/}
          </Row>
          <Row className='rowAdjust'>
            {/*<Col s={12} className='sideBarSmall show-on-medium-and-down hide-on-large-only'>*/}
            <Col s={12} className='sideBarSmall'>
              <SideBarCompSmall
                page={this.state.page}
                handleSidebarClick={(line) => this.handleSidebarClick(line)}
              />
            </Col>
          </Row>
          
          </div>
      </Router>
    );
  }
}

export default App;
