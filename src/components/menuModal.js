import React from "react";
import { CSSTransition } from 'react-transition-group';
import '../App.css';



class MenuModal extends React.Component {
    render() {

        return (

            <div className="modalBack">
                    <div className="modalContent">
                        <p>ABOUT ME</p>
                        <p>PROJECT 1</p>
                        <p>PROJECT 2</p>
                        <p>PROJECT 3</p>
                    </div>    
                </div>

        );
    }
}
export default MenuModal;
