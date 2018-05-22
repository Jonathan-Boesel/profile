/*global $*/
import React from 'react';
import { Link } from "react-router-dom";
import { If, Then, Else } from 'react-if';
import { Row, Col, MediaBox } from 'react-materialize'
import data from '../assets/contentObject'
import _ from 'lodash'
import throttle from 'lodash'

let pageMax = Object.keys(data).length;

class Content extends React.Component {

    state = {
        page: 1
    };

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
        }, 5000, { 'trailing': false });

        $(window).bind('mousewheel', throttleBack);
    }

    render() {

        return (

            <Row>
                <Col s={3} className='contentText'>
                    <Row>
                        <Col s={12} className="left-align Title">
                            {data[this.state.page-1].title}
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p1">
                            <p>{data[this.state.page-1].l1}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p2">
                            <p>{data[this.state.page-1].l2}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p3">
                        <If condition={this.state.page > 1}>
                            <Link to='/viewPage'>
                                <p>{data[this.state.page-1].l3}</p>
                            </Link>
                            <Else />
                            <p>{data[this.state.page-1].l3}</p>
                        </If>
                            
                        </Col>
                    </Row>
                </Col>
                <Col s={8} className='contentImage' style= {{backgroundImage: 'url(' + data[this.state.page-1].image + ')'}}>
                    <a />
                </Col>
                <Col s={1} className='fill'>
                
                </Col>
            </Row>
        );
    }
}

export default Content;
