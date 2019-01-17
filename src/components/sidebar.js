import React from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize';

class SideBarComp extends React.Component {
    render() {

        let point = {
            color: "teal",
        };

        return (
            <Col s={12} className="sideBarContainer flow-text" style={{textAlign: "center"}}>
                <Row style={this.props.page === 1 ? point : null} className="sideBarLine" onClick={() => this.props.handleSidebarClick(1)}>
                    Home
                </Row>
                <Row style={this.props.page === 2 ? point : null} className="sideBarLine" onClick={() => this.props.handleSidebarClick(2)}>
                    Projects
                </Row>
                <Row style={this.props.page === 3 ? point : null}className="sideBarLine" onClick={() => this.props.handleSidebarClick(3)}>
                    About Me
                </Row>
            </Col>


        );
    }
}

export default SideBarComp;
