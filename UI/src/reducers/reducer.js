import Redux from 'redux';
import { UPDATE_GREETING } from './actions.js';

let initialState = {
    greeting: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_GREETING:
            return Object.assign({}, state, {greeting: action.payload});
        default:
            return state;
    }
}

export default reducer;