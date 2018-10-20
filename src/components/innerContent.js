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
                <Col s={3} className='contentText'>
                    <Row>
                        <Col s={12} className="left-align Title">
                            {data[this.props.page].title}
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p1">
                            <p>{data[this.props.page].l1}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p2">
                            <p>{data[this.props.page].l2}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className="p3">
                        <If condition={this.props.page > 1}>
                            <Link to='/viewPage'>
                                <p>{data[this.props.page].l3}</p>
                            </Link>
                            <Else />
                            <p>{data[this.props.page].l3}</p>
                        </If>
                            
                        </Col>
                    </Row>
                </Col>
                <Col s={8} className='contentImage' style= {{backgroundImage: 'url(' + data[this.props.page].image + ')'}}>
                    <a />
                </Col>
                <Col s={1} className='fill'>
                
                </Col>
            </Row>
        )
    }
}

export default InnerContent;
