import React from "react";



class MenuModal extends React.Component {
    render() {
        console.log("$$$$$$$" + this.props.show)
        if (!this.props.show) {
            return null
        }
        return (
            <div className="modalBack">
                <p className = "modal">
                    TEST TEST TEST
                </p>    
            </div>
        );
    }
}
export default MenuModal;
