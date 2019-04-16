import React from "react";
import '../App.css';

class MenuModal extends React.Component {
    render() {
        return (
            <div className="modalBack">
                <div className="modalContent">
                    <p className='flow-text menuP' onClick={() => this.props.handleMenuModalClick(1)}>PROJECTS</p>
                    <p className='flow-text menuP' onClick={() => this.props.handleMenuModalClick(2)}>ABOUT ME</p>
                    <a target="_blank" rel="noopener noreferrer" href={'https://github.com/Jonathan-Boesel'}><p className='flow-text menuP' >GitHub</p></a>
                    <a target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/jonathan-boesel/'}><p className='flow-text menuP' >LinkedIn</p></a>
                </div>    
            </div>
        );
    }
}
export default MenuModal;
