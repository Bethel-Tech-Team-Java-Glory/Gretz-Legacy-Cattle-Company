import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import serviceReducer from './serviceReducer';

const allReducers = combineReducers({
    greeting: homeReducer,
    serviceItems: serviceReducer
});

export default allReducers;