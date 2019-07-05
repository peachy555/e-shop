import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import AddBtn from '../product-listing/add-btn'
import RemoveBtn from '../product-listing/remove-btn'

function ProductDetails(props) {
	const productInfo = props.details[0]
	let cartItem = _.filter(props.cart, item => item.id == productInfo.id)[0]
	return <div className='product-details'>
		{
			productInfo
			? <div className='product-details'>
				<h3>{ productInfo.name } (id: { productInfo.id })</h3>
				<p>{ productInfo.description }</p>
				<AddBtn 
					cartItem={cartItem} 
					product={props.product} 
					addToCart={props.addToCart} 
				/>
				{
					cartItem
						? <RemoveBtn 
							cartItem={cartItem} 
							product={props.product} 
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