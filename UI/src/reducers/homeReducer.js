import Redux from 'redux';
import { UPDATE_GREETING } from '../actions/types';

let initialState = {
    greeting: []
}

export function homeGreeting(state = initialState, action) {
    switch(action.type) {
        case UPDATE_GREETING:
            return {...state, greeting: action.greeting};

        default:
            return state;
    }
}