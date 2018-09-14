import { combineReducers } from 'redux';
import { homeGreeting } from './homeReducer';
import serviceReducer from './serviceReducer';

export default combineReducers({
    homeGreeting,
    serviceReducer
});