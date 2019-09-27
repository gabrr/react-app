import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mainlogo from '../img/logo.png';
import userAvatar from '../img/user.svg';
import shopCart from '../img/shopping-cart.svg';

class Navbar extends Component {
    state = {
        name: 0
    };

    render() {
        return (
            <div>
                <nav>
                    <img src={mainlogo} className="logo" alt="logo" />
                    <div className="search-bar">
                        <input type="text" name="search-bar-input" placeholder="Exemplo: saia jeans" />
                    </div>
                    <div className="login-section">
                        <div className="avatar">
                            <img style={{ display: 'none' }} src={userAvatar} alt="user-icon" />
                            <div className="custom-avatar"><span>G</span></div>
                        </div>
                        <div className="in-out-section">
                            <div className="login-banner" />
                            <div className="signup-banner" />
                        </div>
                    </div>
                    <div className="itens-purchased">
                        <img src={shopCart} alt="shopping-cart" />
                        <div className="itens-counter-div"><span>5</span></div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
