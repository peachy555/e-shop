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