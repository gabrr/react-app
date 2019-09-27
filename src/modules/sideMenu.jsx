import React, { Component } from 'react';
import "../css/mobile.css";
import "../data";

const { sideCardsLinks } = window;
console.log(sideCardsLinks);

class SideMenu extends Component {
    state = {
        cardsInfo: { homens: "roupas", mulheres: "vestidos", child: "brinquedos" }
    };

    render() {
        return (
            <div id="side-menu">
                {console.log(this.state.cardsInfo)}
                {/* {this.state.cardsInfo.map((a, b) => <p>{a}, {b}</p>)} */}
            </div>
        );
    }

}

export default SideMenu;
