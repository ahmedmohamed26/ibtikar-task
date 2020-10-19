import { createStore } from 'redux';
import cartReducer from './reducers/reducers'

const initialState = {
	cart: [],
};
 


const store = createStore(cartReducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
