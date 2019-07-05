import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'
import { cartItemsWithQuantities } from '../cart';

function ProductListing(props) {
	return <div className='product-listing'>
	{
		props.products.map( product =>
			<ProductListItem  
			key={product.id}
			product={product}
			itemOnFocus={props.itemOnFocus}
			addToCart={props.addToCart}
			removeFromCart={props.removeFromCart}
			cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
			/>)
	}
	</div>
}

function mapStateToProps(state) {
	return {
		cart: state.cart,
		details: state.details
	}
}

function mapDispatchToProps(dispatch) {
	return {
		itemOnFocus: (item) => {
			dispatch({ type: 'FOCUS', payload: item })
		},
		addToCart: (item) => {
			dispatch({ type: 'ADD', payload: item })
		},
		removeFromCart: (item) => {
			dispatch({ type: 'REMOVE', payload: item })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)