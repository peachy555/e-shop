import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'
import { cartItemsWithQuantities } from '../cart';

function ProductListing(props) {
	let filteredList = props.search === undefined ? props.products : props.products.filter(item => item.name.toLowerCase().includes(props.search.toLowerCase()))
	return <div className='product-listing'>
		<form className='search-form'>
			<input onChange={props.searchProducts} value={props.search} className='search-form-input' />
		</form>
	{
		filteredList.map( product =>
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
		details: state.details,
		search: state.search
	}
}

function mapDispatchToProps(dispatch) {
	return {
		searchProducts: (searchEvent) => {
			dispatch({ type: 'SEARCH', payload: searchEvent.target.value })
		},
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