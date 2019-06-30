import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Router from './Router.js'

const Navigation = (props) => <nav className='navication'>
	<NavLink to='/'>
		<h1>E-SHOP</h1>
	</NavLink>
	<NavLink to='/checkout'>
		<h1>Checkout</h1>
	</NavLink>
</nav>

const Footer = (props) => <footer className='footer'>
	<NavLink to='/'>
		<h1>footer</h1>
	</NavLink>
</footer>

class App extends Component {
	render() {
		return <div>
	      	<Navigation />
	      	<div className='page-container'>
		      	<Router />
	      	</div>
	      	<Footer />
	    </div>
	}
}

export default App;
