import React from 'react'

import ProductListing from '../features/product-listing';
import data from '../data/products.json';

export default function CataloguePage(props) {
		return <div>
		<h1>Product Catalogue</h1>
		<ProductListing products={data.products} />
	</div>
}