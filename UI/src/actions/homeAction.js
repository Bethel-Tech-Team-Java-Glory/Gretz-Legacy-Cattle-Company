import { UPDATE_GREETING } from './types';

export function addGreeting(greeting) {
    return {
        type: UPDATE_GREETING,
        payload: greeting
    };
}

export function fetchGreeting(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((greeting) => dispatch(addGreeting(greeting)))
    };
}