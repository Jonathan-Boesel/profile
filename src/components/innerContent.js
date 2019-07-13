/*global $*/
import React from 'react';
import { Row, Col } from 'react-materialize';
import data from '../assets/contentObject';

class InnerContent extends React.Component {
    render() {
        return (
            <Row >
                <Row>
                    <Col s={12} className="Title flow-text" style={{width: "50%", whiteSpace: "nowrap", height: "5vh"}}>
                        {data[this.props.page].title}
                    </Col>            </Row>
                    <Col s={12} l={2} className='contentText hide-on-med-and-down show-on-large'>
                            <Col s={4} l={12} className="p1 p flow-text" id='p1' style={{ whiteSpace: "nowrap"}}>
                                <p>{data[this.props.page].l1}</p>
                            </Col>
                            <Col s={4} l={12} className="p2 p flow-text" style={{ whiteSpace: "nowrap"}}>
                                <p>{data[this.props.page].l2}</p>
                            </Col>
                            <Col s={4} l={12} className="p3 p flow-text" style={{ whiteSpace: "nowrap"}}>
                                <p>{data[this.props.page].l3}</p>
                            </Col>
                    </Col>
                <Col m={12} l={9} id="aboutMeInnerContent">
                    <Col m={12} l={4} >
                        <img alt="Profile" className='z-depth-5 contentImage' style={{maxHeight: "30vh"}} src={data[this.props.page].image} ></img>
                    </Col>
                    <Col m={12} l={8} id="aboutMeText"> 
                        <p >{data[this.props.page].l4}</p>
                        <p>Skills:</p>
                        <Col l={4} s={6}>
                            <img alt="HTML5 logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/html5.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="CSS3 logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/css3.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="JS5 logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/JS5.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="jquery logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/jquery.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="node.JS logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/nodeJS.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="react logo" style={{maxHeight: "8vh"}} src={require("../assets/images/react.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="bootstrap logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/bootstrap2.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="materialize logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/materialize.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="mysql logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/mysql.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="firebase logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/firebase.png")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="mongodb logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/mongodb.jpg")} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="handlebars logo" style={{maxHeight: "8vh"}} src={require("../assets/images/icons/handlebars.png")} ></img>
                        </Col>
                    </Col>
                </Col>
                <Col l={1} className='fill hide-on-med-and-down show-on-large'></Col>
            </Row>
        );
    }
}

export default InnerContent;
