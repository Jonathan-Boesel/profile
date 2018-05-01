/*global $*/
import React from 'react';
import { Row, Col, MediaBox } from 'react-materialize'
import data from '../assets/images'
import throttle from 'lodash'
let pageMax = 10;



class Content extends React.Component {
    componentDidMount() {
        // window.addEventListener('wheelEvent', function(event) {
        //     console.log(event)
        //     if (event.wheelDelta >= 0) {
        //         console.log('Scroll up');
        //     }
        //     else {
        //         console.log('Scroll down');
        //     }
        // });
        scrollEvent = () => {
            if (event.originalEvent.wheelDelta >= 0) {
                console.log('Scroll up');
            }
            else {
                console.log('Scroll down');
            }
        }

        $(window).bind('mousewheel', _.throttle, );
    }


    state = {
        page: 1
    }

    handleScroll = () => {
        console.log("scroll")

        this.setState({
            page: this.state.page + 1
        }, function() {
            console.log(this.state.page)
        })

    }
    render() {

        return (

            <Row>
                <Col s={3} className='contentText'>
                    <Row>
                        <Col s={12} className="left-align Title">
                            Jonathan Boesel
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p1">
                            <p>Curious</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p2">
                            <p>Quick Learning</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p3">
                            <p>Problem Solver</p>
                        </Col>
                    </Row>
                </Col>
                <Col s={8} className='contentImage' style= {{backgroundImage: 'url(' + data[this.state.page-1] + ')'}}>
                    <a />
                </Col>
                <Col s={1} className='fill'>
                
                </Col>
            </Row>
        )
    }
}

export default Content;
