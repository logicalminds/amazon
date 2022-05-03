import {
	ADD_QUANTITY,
	ADD_TO_CART,
	ADD_TO_CART_DATA,
	DELETE_CART_ITEM,
	REMOVE_ALL_CART_ITEMS,
} from '../types/types';

const initialState = {
	cartQuantity: 0,
	cartData: [],
	totalCartAmount: 0,
};

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				cartQuantity: state.cartQuantity + 1,
			};
		}
		case ADD_QUANTITY: {
			return {
				cartQuantity: action.payload,
			};
		}
		case REMOVE_ALL_CART_ITEMS: {
			return initialState;
		}
		default:
			return state;
	}
}

export function cartDataReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART_DATA: {
			return {
				...state,
				cartData: [...state.cartData, action.payload],
				totalCartAmount: state.totalCartAmount + action.payload.price,
			};
		}
		case DELETE_CART_ITEM: {
			let removedCartData = state.cartData.splice(action.payload.id, 1);
			console.log(removedCartData);
			return {
				cartData: removedCartData,
				totalCartAmount: state.totalCartAmount - action.payload.price,
			};
		}
		default:
			return state;
	}
}
