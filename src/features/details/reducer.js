const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const itemOnFocus = (item) => {
	return item
}

const detailsReducer = (state={}, action) => {
	switch(action.type){
		case 'FOCUS':
			return itemOnFocus(action.payload)

		default:
			return state
	}
}

export default detailsReducer