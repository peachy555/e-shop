import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import _ from 'lodash'

import CheckoutModal from './checkout-modal'

function Checkout(props) {
	let subTotalPrice = _.sum(props.cart.map(item => item.price * item.quantity))
	return <table className='checkout-table'>
		<thead>
			{
				props.cart.length
					? <tr>
						<th className='checkout-table head name'>Item</th>
						<th className='checkout-table head quantity'>Quantity</th>
						<th className='checkout-table head price'>Price</th>
						<th className='checkout-table head add'></th>
						<th className='checkout-table head remove'></th>
						<th className='checkout-table head remove-all'></th>
					</tr>
					: <tr>
						<th>Your cart is empty</th>
					</tr>
			}
		</thead>
		<tbody>
			{
				_.sortBy(props.cart, 'id').map(item => <tr key={item.id}>
						<td className='checkout-table item name'>{item.name} (${item.price})</td>
						<td className='checkout-table item quantity'>{item.quantity}</td>
						<td className='checkout-table item price'>${item.price * item.quantity}</td>
						<td className='checkout-table item add'>
							<Button
								onClick={(e) => props.addToCart(item)}
							>+</Button>
						</td>
						<td className='checkout-table item remove'>
							<Button
								onClick={(e) => props.removeFromCart(item)}
							>-</Button>
						</td>
						<td className='checkout-table item remove-all'>
							<Button className='checkout-table btn lg'
								onClick={(e) => props.removeAllFromCart(item)}
							>Remove All</Button>
						</td>
					</tr>
				)
			}
			<tr>
				{
					subTotalPrice
						? <td className='checkout-table item name bold'>Total</td>
						: <td className='checkout-table item name bold'></td>
				}
				<td></td>
				{
					subTotalPrice
						? <td className='checkout-table item price bold'>${subTotalPrice}</td>
						: <td className='checkout-table item price bold'></td>
				}
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>
					{
						props.cart.length
							? <CheckoutModal { ...props}/>
							: null
					}
				</td>
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