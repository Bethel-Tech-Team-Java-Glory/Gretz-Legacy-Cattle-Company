import Redux from 'redux';
import { SERVICE_SELECTED, SERVICE_DESELECTED } from '../actions/types';

const initialState = {
    serviceItems: []
}

function serviceReducer(state, action) {
    if(typeof state === 'undefined') {
        return Object.assign({}, initialState)
    }
    switch (action.type) {
        case SERVICE_SELECTED:
            return {
                serviceItems: [...state.serviceItems, action.payload]
            } 
        case SERVICE_DESELECTED:
            return state;
        default:
            return state;
    }
}

export default serviceReducer;