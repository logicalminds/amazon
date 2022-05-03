import axios from 'axios';
import { products } from '../../api';
import { GET_DATAS, SEARCH_DATAS } from '../types/types';

export const fetchPhotos = () => {
	return function (dispatch) {
		axios
			.get(products)
			.then((res) => {
				dispatch({
					type: GET_DATAS,
					payload: res.data,
				});
			})
			.catch(() => console.log('Error in displaying users'));
	};
};

export const searchDatas = (search) => {
	console.log('@@search', search);
	console.log(`${products}/${search}`);
	return function (dispatch) {
		axios
			.get(`${products}/${search}`)
			.then((res) => {
				dispatch({
					type: SEARCH_DATAS,
					payload: res.data,
				});
			})
			.catch(() => console.log('Error in displaying users'));
	};
};
