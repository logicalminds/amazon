import { GET_DATAS, SEARCH_DATAS } from '../types/types';

const initialState = {
	cards: [],
};

export default function cardsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_DATAS: {
			return {
				cards: action.payload,
			};
		}
		case SEARCH_DATAS: {
			return {
				cards: action.payload,
			};
		}
		default:
			return state;
	}
}

export function cardsSearchReducer(state = initialState, action) {
	console.log(action.payload);
	switch (action.type) {
		default:
			return state;
	}
}
