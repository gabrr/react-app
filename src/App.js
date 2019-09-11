import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/mobile.css';
import './css/ipad.css';
import mainlogo from './img/logo.png';
import userAvatar from './img/user.svg';
import shopCart from './img/shopping-cart.svg';
import Cards from './modules/Cards.jsx';

class Navbar extends Component {
    state = {
        cardd: () => {
            console.log(true);
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <img src={mainlogo} className="logo" />
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
                <button onClick={this.state.cardd}>Teste</button>
            </div >
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="teste"></div>
            </div>
        );
    }

};


export default App;
