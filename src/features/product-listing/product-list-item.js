import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'
import { NavLink} from 'react-router-dom'

export default function ProductListItem(props) {
	console.log(props.cartItem)
	return <div className='product-listing-item'>
		<h3><NavLink to='/details' onClick={() => props.itemOnFocus(props.product)}>{ props.product.name }</NavLink></h3>
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
