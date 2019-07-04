import React from 'react'
import { Button } from 'semantic-ui-react'

export default function RemoveBtn(props) {
	return <Button
		onClick={() => props.removeFromCart(props.product)}
		>Remove</Button>
}
