/*global $*/
import React from 'react';
import { Row, Col } from 'react-materialize';
import data from '../assets/contentObject';
import html5 from '../assets/images/icons/html5.png'
import css3 from "../assets/images/icons/css3.png";
import JS5 from "../assets/images/icons/JS5.png";
import jquery from "../assets/images/icons/jquery.png";
import nodeJS from "../assets/images/icons/nodeJS.png";
import reactpng from "../assets/images/react.png";
import bootstrap2 from "../assets/images/icons/bootstrap2.png";
import materialize from "../assets/images/icons/materialize.png";
import msql from "../assets/images/icons/mysql.png";
import firebase from "../assets/images/icons/firebase.png";
import mongodb from "../assets/images/icons/mongodb.png";
import handlebars from "../assets/images/icons/handlebars.png";

// const req = require.context("../assets/images/icons", false, /\.(png|jpg|svg)$/i);
// const logos = req.keys().map(req);

class InnerContent extends React.Component {
    
    
    render() {
        let logos = [html5, css3, JS5, jquery, nodeJS, reactpng, bootstrap2, materialize, msql, firebase, mongodb, handlebars]
        let logoDiv = 
            logos.map((i) => {
                return <Col 
                l={4} s={6}>
                    <img alt="logo" style={{maxHeight: "8vh", display: "block", margin: "auto", marginBottom: "5px"}} src={i} ></img>
                </Col>
            })  

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
                        {logoDiv}
                        {/* <Col l={4} s={6}>
                            <img alt="HTML5 logo" style={{maxHeight: "8vh"}} src={html5} ></img>
                        </Col> */}
                        {/* <Col l={4} s={6}>
                            <img alt="CSS3 logo" style={{maxHeight: "8vh"}} src={logos} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="JS5 logo" style={{maxHeight: "8vh"}} src={JS5} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="jquery logo" style={{maxHeight: "8vh"}} src={jquery} ></img>
                        </Col>
                        <Col l={4} s={6}>
                            <img alt="node.JS logo" style={{maxHeight: "8vh"}} src={nodeJS} ></img>
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
                        </Col> */}
                    </Col>
                </Col>
                <Col l={1} className='fill hide-on-med-and-down show-on-large'></Col>
            </Row>
        );
    }
}

export default InnerContent;
