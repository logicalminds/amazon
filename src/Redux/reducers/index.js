import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import { cardsSearchReducer } from './cardsReducer';
import userSigninReducer from './signinReducer';
import cartReducer from './cartReducer';
import { cartDataReducer } from './cartReducer';

export default combineReducers({
	cardsData: cardsReducer,
	userSigninReducer: userSigninReducer,
	cartReducer: cartReducer,
	cartDataReducer: cartDataReducer,
	cardsSearchReducer: cardsSearchReducer,
});
