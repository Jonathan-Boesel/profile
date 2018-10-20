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

let pageMax = Object.keys(data).length + 1;

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
    }

    componentDidMount() {
        console.log(data);
        var handleScrollDown = () => {
            console.log("scroll");
            if (this.state.page < pageMax) {
                this.setState({
                    page: this.state.page + 1
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
                    page: this.state.page - 1
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

    render() {
        let pageCurrent;
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

        if (this.state.page < 3) {
            pageCurrent = <InnerContent page={this.state.page-1}></InnerContent>
        }
        else if (this.state.page == 3) {
            pageCurrent = <Tile page={this.state.page}></Tile>
        }
        return (
            pageCurrent
        );
    }
}

export default Content;
