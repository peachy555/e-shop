import * as cartReducer from '../../features/cart/reducer'

let testCart = [
	{
		"id": 1,
		"name": "Business Insurance: Budget",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"image_url": "https://i.ibb.co/LZLK6xM/product-1.png",
		"price": 20,
		"quantity": 1
	},
]

const testProducts = [
	{
		"id": 1,
		"name": "Business Insurance: Budget",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"image_url": "https://i.ibb.co/LZLK6xM/product-1.png",
		"price": 20
	},
	{
		"id": 2,
		"name": "Business Insurance: Standard",
		"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
		"image_url": "https://i.ibb.co/ZVWbmFP/product-2.png",
		"price": 1000
	},
	{
		"id": 3,
		"name": "Health Cover: Budget",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		"image_url": "https://i.ibb.co/3pr1rxJ/product-3.png",
		"price": 80
	}
]

describe('todos cartReducer', () => {
	it('should return the initial state', () => {
		expect(cartReducer.default({}, {})).toEqual({})
	})

	it('should return the state it is currently in', () => {
		expect(cartReducer.default(testCart, {})).toEqual([{ ...testProducts[0], quantity: 1 }])
	})

	it('should handle ADD', () => {
		testCart = cartReducer.default(testCart, {type: 'ADD', payload: testProducts[2]})
		expect(testCart)
			.toEqual([
				{ ...testProducts[0], quantity: 1 },
				{ ...testProducts[2], quantity: 1 }
			])


		testCart = cartReducer.default(testCart, {type: 'ADD', payload: testProducts[2]})
		expect(testCart)
			.toEqual([
				{ ...testProducts[0], quantity: 1 },
				{ ...testProducts[2], quantity: 2 }
			])
	})

	it('should handle REMOVE', () => {
		testCart = cartReducer.default(testCart, {type: 'REMOVE', payload: testProducts[2]})
		expect(testCart)
			.toEqual([
				{ ...testProducts[0], quantity: 1 },
				{ ...testProducts[2], quantity: 1 }
			])

		testCart = cartReducer.default(testCart, {type: 'REMOVE', payload: testProducts[2]})
		expect(testCart)
			.toEqual([
				{ ...testProducts[0], quantity: 1 }
			])
	})

	it('should handle REMOVE_ALL', () => {
		testCart = [
				{ ...testProducts[0], quantity: 1 },
				{ ...testProducts[1], quantity: 1 },
				{ ...testProducts[2], quantity: 2 }
			]
		testCart = cartReducer.default(testCart, {type: 'REMOVE_ALL', payload: testProducts[2]})
		expect(testCart)
			.toEqual([
				{ ...testProducts[0], quantity: 1 },
				{ ...testProducts[1], quantity: 1 }
			])
	})
})