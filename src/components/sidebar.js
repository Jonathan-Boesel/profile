import React from 'react';
import '../App.css';
import { Row, Col } from 'react-materialize';

class SideBarComp extends React.Component {
    render() {

        return (

            <Col s={12} className="sideBarContainer flow-text" style={{textAlign: "center"}}>
                <Row>
                    Home
                </Row>
                <Row>
                    Projects
                </Row>
                <Row>
                    About Me
                </Row>
            </Col>


        );
    }
}

export default SideBarComp;
