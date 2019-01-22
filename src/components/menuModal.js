import React from "react";
import { CSSTransition } from 'react-transition-group';
import '../App.css';



class MenuModal extends React.Component {
    render() {

        return (

            <div className="modalBack">
                    <div className="modalContent">
                        <p className='flow-text menuP' onClick={() => this.props.handleMenuModalClick(1)}>HOME</p>
                        <p className='flow-text menuP' onClick={() => this.props.handleMenuModalClick(2)}>PROJECTS</p>
                        <p className='flow-text menuP' onClick={() => this.props.handleMenuModalClick(3)}>ABOUT ME</p>
                    </div>    
                </div>

        );
    }
}
export default MenuModal;
