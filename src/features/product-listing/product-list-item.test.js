import React from 'react'
import { shallow } from 'enzyme'
import ProductListingItem from './product-list-item'
import data from '../../data/products.json';

const product = data.products[0]

describe('Render Product Listing', () => {
	describe('Pre-test', () => {
		it('renders correctly', () => {
			const wrapper = shallow(
				<ProductListItem  
				key={product.id}
				product={product}
				itemOnFocus={props.itemOnFocus}
				addToCart={props.addToCart}
				removeFromCart={props.removeFromCart}
				// cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
				/>
			)
		})
	})

	test('can render with redux with defaults', () => {
		const {getByTestId, getByText, unmount, container} = renderWithRedux(
			<ProductListItem  
				key={product.id}
				product={product}
				itemOnFocus={props.itemOnFocus}
				addToCart={props.addToCart}
				removeFromCart={props.removeFromCart}
				// cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
				/>
		)
		fireEvent.click(getByText('+'))
		expect(getByTestId('count-value')).toHaveTextContent('1')
	})

	describe('Test Data', () => {
		it('it should contain sample data', () => {
			expect(data.products.length).toBeGreaterThan(0)
		})
	})
})