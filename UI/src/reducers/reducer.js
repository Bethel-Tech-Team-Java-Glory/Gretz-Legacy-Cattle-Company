import Redux from 'redux';
import { UPDATE_GREETING, UPDATE_SERVICE } from './actions.js';

let initialState = {
    greeting: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_GREETING:
            return {...state, greeting: action.payload};
        default:
            return state;
    }
    // switch(action.type) {
    //     case UPDATE_SERVICE:
    //         return {...state, service: action.payload};
    //     default:
    //         return state;
    // }
}

export default reducer;