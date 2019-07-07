import React from 'react'
import { shallow } from 'enzyme'
import ProductListing from './'
import data from '../../data/products.json';

describe('Render Product Listing', () => {
	// describe('Pre-test', () => {
	// 	it('renders correctly', () => {
	// 		const wrapper = shallow(
	// 			<ProductListing products={data.products}/>
	// 		)
	// 	})
	// })

	describe('Test Data', () => {
		it('it should contain sample data', () => {
			expect(data.products.length).toBeGreaterThan(0)
		})
	})
})