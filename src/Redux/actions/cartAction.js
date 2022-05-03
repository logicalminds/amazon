import axios from 'axios';
import { products } from '../../api';
import {
	ADD_QUANTITY,
	ADD_TO_CART,
	ADD_TO_CART_DATA,
	DELETE_CART_ITEM,
	REMOVE_ALL_CART_ITEMS,
} from '../types/types';

export const addToCart = () => {
	return {
		type: ADD_TO_CART,
	};
};

export const addToCartData = (productDataId) => {
	return function (dispatch) {
		axios
			.get(`${products}/${productDataId}`)
			.then((res) => {
				dispatch({
					type: ADD_TO_CART_DATA,
					payload: res.data,
				});
			})
			.catch(() => console.log('Error in fetching product data'));
	};
};

export const addQuantity = (productQuantity) => {
	return {
		type: ADD_QUANTITY,
		payload: productQuantity,
	};
};

export const removeAllCartItems = () => {
	return {
		type: REMOVE_ALL_CART_ITEMS,
	};
};

export const deleteCartItem = (productId) => {
	return function (dispatch) {
		axios
			.get(`${products}/${productId}`)
			.then((res) => {
				dispatch({
					type: DELETE_CART_ITEM,
					payload: res.data,
				});
			})
			.catch(() => console.log('Error in fetching product data'));
	};
};
