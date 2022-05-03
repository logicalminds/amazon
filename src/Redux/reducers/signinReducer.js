import { USER_CREDENTIALS, USER_PASSWORD } from '../types/types';

const initialState = {
	isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' ? true : false,
	credential: '',
	password: '',
	name: '',
	city: '',
	pincode: '',
};

export default function userSigninReducer(state = initialState, action) {
	switch (action.type) {
		case USER_CREDENTIALS: {
			return {
				credential: action.payload.credential,
			};
		}
		case USER_PASSWORD: {
			//localStorage.setItem('isLoggedIn', 'true');
			return {
				isLoggedIn: action.payload.isLoggedIn,
				password: action.payload.password,
				name: action.payload.name,
				city: action.payload.city,
				pincode: action.payload.pincode,
			};
		}
		default:
			return state;
	}
}
