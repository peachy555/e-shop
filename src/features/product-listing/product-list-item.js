import React from 'react'

export default function ProductListItem(props) {
	const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
	return <div className='product-listing-item'>
		<h3>{ props.product.name }</h3>
		<span>Price: ${ props.product.price }</span>
		<span>
			<button
				onClick={() => props.addToCart(props.product)}
			>Add to cart ({
				(thisItemInCart && thisItemInCart.quantity) || 0
			})</button>
		</span>
	</div>
}
