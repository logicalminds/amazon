import { USER_CREDENTIALS, USER_PASSWORD } from '../types/types';

export const userCredentials = (userLoginInput) => {
	return {
		type: USER_CREDENTIALS,
		payload: {
			credential: userLoginInput,
		},
	};
};

export const userSignin = ({ name, userLoginPassword, address }) => {
	return {
		type: USER_PASSWORD,
		payload: {
			isLoggedIn: true,
			password: userLoginPassword,
			name: name,
			city: address.city,
			pincode: address.zipcode,
		},
	};
};
