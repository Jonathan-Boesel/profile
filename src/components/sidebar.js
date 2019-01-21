import React from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize';
import { CSSTransition } from 'react-transition-group';

class SideBarComp extends React.Component {
    render() {
        let description;
        if (this.props.page === 1) {
            description = "---Home---"
        }
        let point = {
            color: "#2FB595",
            fontWeight: "bold",
            transition: "color 1000ms",
        };

        let show = {
            display: "inline"
        }

        let hide = {
            display: "none"
        }

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
