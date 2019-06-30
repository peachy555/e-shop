import React from 'react'

export default function ProductListItem(props) {
	return <div className='product-listing-item'>
		<h3>{ props.product.name }</h3>
		<span>Price: ${ props.product.price }</span>
		<span>
			<button
				onClick={() => props.addToCart(props.product)}
			>Add to cart ({
				(props.cartItem && props.cartItem.quantity) || 0
			})</button>
		</span>
	</div>
}
