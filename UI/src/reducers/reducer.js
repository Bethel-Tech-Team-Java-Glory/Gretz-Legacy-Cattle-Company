import Redux from 'redux';

let initialState = {
    greeting: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'update_greeting':
            return {...state, greeting: action.greeting};
        default:
            return state;
    }
}

export default reducer;