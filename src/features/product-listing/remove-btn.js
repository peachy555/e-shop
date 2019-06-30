import React from 'react'

export default function RemoveBtn(props) {
	return <button
		onClick={() => props.removeFromCart(props.product)}
		>Remove</button>
}
