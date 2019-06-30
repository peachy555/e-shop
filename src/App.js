import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Router from './Router.js'

const Navigation = (props) => <nav>
	<ul>
		<li><NavLink to='/'>Home</NavLink></li>
		<li><NavLink to='/checkout'>Checkout</NavLink></li>
	</ul>
</nav>

class App extends Component {
	render() {
		return <div className='page-container'>
	      	<h1>Shopping Cart</h1>
	      	<Navigation />
	      	<Router />
	    </div>
	}
}

export default App;
