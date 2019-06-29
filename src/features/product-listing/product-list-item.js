import React from 'react'

export default function ProductListItem(props) {
	return <div>
		<h3>{ props.product.name }</h3>
		<span>Price: ${ props.product.price }</span>
		<span>
			<button>Add to cart</button>
		</span>
	</div>
}
