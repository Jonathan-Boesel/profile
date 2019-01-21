/*global $*/
import React from 'react';
import { Row, Col, MediaBox } from 'react-materialize';
import data from '../assets/contentObject';
import { If, Then, Else } from 'react-if';
import { Link } from "react-router-dom";

class InnerContent extends React.Component {
    render() {
        // console.log(data)
        return (
            <Row>
                <Col s={2} className='contentText'>
                    <Row>
                        <Col s={12} className="Title flow-text" style={{width: "50%", whiteSpace: "nowrap"}}>
                            {data[this.props.page].title}
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p1 p flow-text" id='p1' style={{ whiteSpace: "nowrap"}}>
                            <p>{data[this.props.page].l1}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p2 p flow-text" style={{ whiteSpace: "nowrap"}}>
                            <p>{data[this.props.page].l2}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p3 p flow-text" style={{ whiteSpace: "nowrap"}}>
                            <p>{data[this.props.page].l3}</p>
                        </Col>
                    </Row>
                </Col>
                <Col s={9} className='contentImage z-depth-5' style= {{backgroundImage: 'url(' + data[this.props.page].image + ')'}}>
                    <a />
                </Col>
                <Col s={1} className='fill'>
                
                </Col>
            </Row>
        )
    }
}

export default InnerContent;
