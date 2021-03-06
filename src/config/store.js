import { createStore, combineReducers } from 'redux'
import cartReducer from '../features/cart/reducer'
import detailsReducer from '../features/details/reducer'
import searchReducer from '../features/search/reducer'

const rootReducer = combineReducers({
	cart: cartReducer,
	details: detailsReducer,
	search: searchReducer

})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store