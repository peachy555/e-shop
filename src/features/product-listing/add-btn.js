import React from 'react'
import { Button } from 'semantic-ui-react'

export default function AddBtn(props) {
	return <Button
		onClick={() => props.addToCart(props.product)}
		>Add to cart ({
			(props.cartItem && props.cartItem.quantity) || 0
		})
	</Button>
}
