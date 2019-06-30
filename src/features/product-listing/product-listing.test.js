import React from 'react'
import { shallow } from 'enzyme'
import ProductListing from './'
import data from '../../data/products.json';

describe('Render Product Listing', () => {
	describe('Test Data', () => {
		it('it should contain sample data', () => {
			expect(data.products.length).toBeGreaterThan(0)
		})
	})
})