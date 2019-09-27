import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/mobile.css';
import './css/ipad.css';
import Navbar from "./modules/navbar";
import Mainframe from "./modules/mainframe";




class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Mainframe />
			</div>
		)
	}

};


export default App;
