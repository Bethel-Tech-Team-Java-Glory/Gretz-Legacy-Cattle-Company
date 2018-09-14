import { createStore, applyMiddleware } from 'redux';
import index from '../reducers';
import thunk from 'redux-thunk';

export default function configStore(initialStore) {
    return createStore(
        index,
        initialStore,
        applyMiddleware(thunk)
    )
}