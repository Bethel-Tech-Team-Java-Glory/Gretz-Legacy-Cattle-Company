import { SERVICE_SELECTED, SERVICE_DESELECTED } from './types';

export function serviceSelected(serviceItems) {
    return {
        type: SERVICE_SELECTED,
        payload: serviceItems
    }
}

export function serviceDeselected(serviceItems) {
    return {
        type: SERVICE_DESELECTED,
        payload: serviceItems
    }
}