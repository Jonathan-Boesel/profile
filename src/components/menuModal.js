import React from "react";



class MenuModal extends React.Component {
    render() {
        console.log("$$$$$$$" + this.props.show)
        if (!this.props.show) {
            return null
        }
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
