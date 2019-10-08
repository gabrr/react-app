import React, { Component } from 'react';
import "../css/mobile.css";
import MenuItens from './sideMenuItems';

class SideMenu extends Component {
    render() {
        return (
            <div id="side-menu">
                <MenuItens />
            </div>
        );
    }

}

export default SideMenu;
