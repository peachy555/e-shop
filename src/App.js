import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import Router from './Router.js'

const Navigation = ({cart}) => <nav className='navigation'>
	<ul className='top-menu'>
		<li>
			<NavLink to='/'>E-SHOP</NavLink>
		</li>
		<li>
			<NavLink to='/checkout'>
				Checkout ({cart.reduce((acc, item) => {
					return acc + item.quantity
				}, 0)})
			</NavLink>
		</li>
	</ul>
</nav>

const Footer = (props) => <footer className='footer'>
	<NavLink to='/'>
		<h1>footer</h1>
	</NavLink>
</footer>

class App extends Component {
	render() {
		return <div>
	      	<Navigation { ...this.props }/>
	      	<div className='page-container'>
		      	<Router />
	      	</div>
	      	<Footer />
	    </div>
	}
}

function mapStateToProps(state) {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps)(App);
