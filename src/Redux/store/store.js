import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

//const applyMiddleware = redux.applyMiddleware;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
