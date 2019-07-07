const searchProducts = (state, searchParam) => {
	return searchParam
}

const searchReducer = (state='', action) => {
	switch(action.type){
		case 'SEARCH':
			return searchProducts(state, action.payload)

		default:
			return state
	}
}

export default searchReducer