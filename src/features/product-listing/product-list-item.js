import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProductListItem(props) {
	return <div className='product-listing-item'>
		<h3>{ props.product.name }</h3>
		<span>Price: ${ props.product.price }</span>
		<span>
			<AddBtn 
				cartItem={props.cartItem} 
				product={props.product} 
				addToCart={props.addToCart} 
			/>
			{
				props.cartItem
					? <RemoveBtn 
						cartItem={props.cartItem} 
						product={props.product} 
						removeFromCart={props.removeFromCart} 
					/>
					: null
			}
		</span>
	</div>
}
