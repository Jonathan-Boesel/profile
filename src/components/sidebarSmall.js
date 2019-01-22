import React from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize';
import { CSSTransition } from 'react-transition-group';

class SideBarCompSmall extends React.Component {
    render() {
        if (this.props.page === 1) {}
        let point = {
            color: "#2FB595",
            fontWeight: "bold",
            transition: "color 1000ms",
        };

        return (

            <Row className="sideBarContainer flow-text">
                <Col s={12}  className="sideBarTags">
                    <Col s={1.5}></Col>
                    <Col s={3}  className="sideBarLineSmall" onClick={() => this.props.handleSidebarClick(1)}>
                        <span style={this.props.page === 1 ? point : null}>Home</span>
                    </Col>
                    <Col s={3} style={this.props.page === 2 ? point : null} className="sideBarLine" onClick={() => this.props.handleSidebarClick(2)}>
                        Projects
                    </Col>
                    <Col s={3} style={this.props.page === 3 ? point : null}className="sideBarLine" onClick={() => this.props.handleSidebarClick(3)}>
                        About Me
                    </Col>
                    <Col s={1.5}></Col>
                </Col>
                
            </Row>


        );
    }
}

export default SideBarCompSmall;