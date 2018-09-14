import Redux from 'redux';
import { UPDATE_GREETING } from '../actions/types';

let initialState = {
    greeting: []
}

export default function homeReducer(state = initialState, {type, payload}) {
    switch(type) {
        case UPDATE_GREETING:
            return payload;

        default:
            return state;
    }
}