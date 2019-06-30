import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

function Checkout(props) {
	let subTotalPrice = _.sum(props.cart.map(item => item.price * item.quantity))
	return <table>
		<thead>
			{
				props.cart.length
					? <tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Price</th>
						<th></th>
						<th></th>
					</tr>
					: <tr>
						<th>Your cart is empty</th>
					</tr>
			}
		</thead>
		<tbody>
			{
				_.sortBy(props.cart, 'id').map(item => <tr>
						<td>{item.name} (${item.price})</td>
						<td>{item.quantity}</td>
						<td>${item.price * item.quantity}</td>
						<td>
							<button
								onClick={(e) => props.addToCart(item)}
							>+</button>
						</td>
						<td>
							<button
								onClick={(e) => props.removeFromCart(item)}
							>-</button>
						</td>
						<td>
							<button
								onClick={(e) => props.removeAllFromCart(item)}
							>Remove All</button>
						</td>
					</tr>
				)
			}
			<tr>
				<td></td>
				<td></td>
				{
					subTotalPrice
						? <td>${subTotalPrice}</td>
						: null
				}
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
}

function mapStateToProps(state) {
	return {
		cart: state.cart
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (item) => {
			dispatch({ type: 'ADD', payload: item})
		},
		removeFromCart: (item) => {
			dispatch({ type: 'REMOVE', payload: item})
		},
		removeAllFromCart: (item) => {
			dispatch({ type: 'REMOVE_ALL', payload: item})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)