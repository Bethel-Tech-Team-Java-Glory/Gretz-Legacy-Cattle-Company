import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
        allReducers
    );

export default store;