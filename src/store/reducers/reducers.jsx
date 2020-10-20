import { ADD_TO_CART, REMOVE_FROM_CART,CLEAR_CART } from '../types/types';

export default function cartReducer(state, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				cart: [
					...state.cart,
					{
						product: action.productsInfo,
						quantity: action.quantity,
					},
				],
			};
		}

        case REMOVE_FROM_CART: {
            const itemIndex = action.index;
            const newState = { ...state };
            newState.cart.splice(itemIndex,1);
            return newState;
		}
		case CLEAR_CART:{
            const newState = {...state};
            newState.cart = [];
            return newState;
        }
        default:
            return state; 
	}
}
