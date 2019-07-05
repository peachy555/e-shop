import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import AddBtn from '../product-listing/add-btn'
import RemoveBtn from '../product-listing/remove-btn'

function ProductDetails(props) {
	let cartItem = _.filter(props.cart, item => item.id === props.details.id)[0]

	return <div className='product-details'>
		{
			props.details
			? <div className='product-details'>
				<h3>{ props.details.name } (id: { props.details.id })</h3>
				<img src={ props.details.image_url } />
				<p>{ props.details.description }</p>
				<p>Price: ${ props.details.price }</p>

				<AddBtn 
					cartItem={cartItem} 
					product={props.details} 
					addToCart={props.addToCart} 
				/>
				{
					cartItem
						? <RemoveBtn 
							cartItem={cartItem} 
							product={props.details} 
							removeFromCart={props.removeFromCart} 
						/>
						: null
				}
			</div>
			: null
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
		addToCart: (item) => {
			dispatch({ type: 'ADD', payload: item })
		},
		removeFromCart: (item) => {
			dispatch({ type: 'REMOVE', payload: item })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)