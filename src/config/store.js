import { createStore, combineReducers } from 'redux'
import cartReducer from '../features/cart/reducer'
import productsReducer from '../features/product-listing/reducer'
import detailsReducer from '../features/details/reducer'
import searchReducer from '../features/search/reducer'

const rootReducer = combineReducers({
	cart: cartReducer,
	products: productsReducer,
	details: detailsReducer,
	search: searchReducer

})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store