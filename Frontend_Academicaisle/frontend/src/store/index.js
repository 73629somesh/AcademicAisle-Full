import { combineReducers, createStore } from 'redux'
import CartItemsReducer from './CartItemsReducer';
import reducer from './reducer'


const combreducer = combineReducers({ loggedin: reducer, cart: CartItemsReducer });
const store = createStore(combreducer)
export default store;