import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './product-list-item.js'
import searchProducts from './search.js'

function ProductListing(props) {
	let filteredList = searchProducts(props)
	return <div className='product-listing'>
		<form className='search-form'>
			<div className="ui focus input">
				<input onChange={props.searchProducts} value={props.search} type="text" placeholder='Search...' className='search-form-input'/>
			</div>
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
				/>
			)
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