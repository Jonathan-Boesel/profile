/*global $*/
import React from 'react';


class Menu extends React.Component {
    state = {
        isActive: false
    }

    handleClick = () => {
        this.setState({
            isActive: !this.state.isActive
        }, function() {
            console.log(this.state.isActive);
        });
    }

    render() {
        return (
            <div className="menu" onClick={this.handleClick}>
                <div className={this.state.isActive ? "change1" : "bar1"}></div>
                <div className={this.state.isActive ? "change2" : "bar2"}></div>
            </div>
        )
    }
}


export default Menu;
