import React from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize';
class SideBarComp extends React.Component {
    render() {
        if (this.props.page === 1) {}
        let point = {
            color: "#2fb595",
            fontWeight: "bold",
            transition: "color 1000ms",
        };
        return (
            <Row className="sideBarContainer flow-text" >
                <Col s={12} style={{float: "right"}} className="sideBarTags">
                    <Row  className="sideBarLine" onClick={() => this.props.handleSidebarClick(1)}>
                        <span style={this.props.page === 1 ? point : null}>Home</span>
                    </Row>
                    <Row style={this.props.page === 2 ? point : null} className="sideBarLine" onClick={() => this.props.handleSidebarClick(2)}>
                        Projects
                    </Row>
                    <Row style={this.props.page === 3 ? point : null}className="sideBarLine" onClick={() => this.props.handleSidebarClick(3)}>
                        About Me
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default SideBarComp;
