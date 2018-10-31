import React from 'react';
import { Row, Col } from 'react-materialize';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../App.css';
import Delayed from 'react-delayed';
// import data from '../assets/tileObject.js';

class Tile extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isActive: false
    //     };
    // }
    // componentDidMount() {
    //     if (this.props.page == 3) {
    //         this.setState({
    //             isActive: true
    //         })
    //     }
    // }
    render() {

        // const isActive = this.state.isActive;
        // console.log('****' + isActive.isActive)

        // const tiles = (
        // <div className='tileWrapper'>
        //     <Col s={4}>
        //         <Row>
        //             <Row className='tileTitle'>
        //                 PROJECT
        //             </Row>
        //             <Row className='tileDescription'>
        //                 SOMETHING SOMETHING SOMETHING
        //             </Row>
        //         </Row>
        //     </Col>

        // </div>
        // )

        return (
            // <CSSTransition
            //     in={isActive}
            //     timeout={2000}
            //     classNames='proTiles'
            //     unmountOnExit>
            //     {tiles}
            // </CSSTransition>


            <div className='tileWrapper'>
                <Col s={4}>
                    <Row>
                        <Row className='tileTitle'>
                            {this.props.title}
                        </Row>
                        <Row className='tileDescription'>
                            {this.props.description}
                        </Row>
                    </Row>
                </Col>
            </div>

        )

    }
}

export default Tile
