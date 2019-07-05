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
				<div className='product-details top-row'>
					<div className='product-details top-row-block'>
						<img src={ props.details.image_url } />
					</div>
					<div className='product-details top-row-block'>
						<h3>{ props.details.name } (id: { props.details.id })</h3>
						<p>Price: ${ props.details.price }</p>
					</div>
				</div>
				<div className='product-details description'><p>{ props.details.description }</p></div>
				<div className='product-details btn'>
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