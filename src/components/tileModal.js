import React from "react";
import { Row, Col, MediaBox } from 'react-materialize';
import { CSSTransition } from 'react-transition-group';
import '../App.css';



class TileModal extends React.Component {
    render() {

        return (

            <div className="tileModal">
                <div style= {{color: 'red'}} onClick={() => this.props.onClick()}>
                    X
                </div>
                <div className="tileModalContent">
                    <p>ABOUT ME</p>
                    <p>PROJECT 1</p>
                    <p>PROJECT 2</p>
                    <p>PROJECT 3</p>
                </div>    
            </div>


        );
    }
}
export default TileModal;
