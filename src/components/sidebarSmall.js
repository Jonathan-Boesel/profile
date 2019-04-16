import React from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize';

class SideBarCompSmall extends React.Component {
    render() {
        if (this.props.page === 1) {}
        let point = {
            color: "#2fb595",
            fontWeight: "bold",
            transition: "color 1000ms",
        };
        return (
            <Row className="sideBarContainer flow-text">
                <Col s={12}  className="sideBarTags">
                    <Col l={4} style={this.props.page === 1 ? point : null} className="sideBarLine hide-on-med-and-down" onClick={() => this.props.handleSidebarClick(1)}>
                        Projects
                    </Col>
                    
                    <Col l={4} style={this.props.page === 2 ? point : null} className="sideBarLine hide-on-med-and-down" onClick={() => this.props.handleSidebarClick(2)}>
                        About Me
                    </Col>
                    
                    <Col s={12} l={4} style={this.props.page === 3 ? point : null}className="sideBarLine3" >
                        <span>Built in  </span>
                        <img src={require("../assets/images/react.png")} alt="React logo" style={{display: "inlineBlock", verticalAlign: "-1.25vh", height: "4vh"}}/>
                        <span>|View on</span>
                        <a target="_blank" rel="noopener noreferrer" href={'https://github.com/Jonathan-Boesel/profile'}>
                            <img src={require("../assets/images/github.png")} alt="github logo" style={{display: "inlineBlock", verticalAlign: "-1vh", height: "4vh"}}></img>
                        </a>
                    </Col>
                </Col>
            </Row>
        );
    }
}

export default SideBarCompSmall;
