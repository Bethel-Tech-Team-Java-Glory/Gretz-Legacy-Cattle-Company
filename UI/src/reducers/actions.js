
export const UPDATE_GREETING = "UPDATE_GREETING";
// export const UPDATE_SERVICE = "UPDATE_SERVICE";

export function addGreeting(greeting) {
    return {
    type: UPDATE_GREETING,
    payload: greeting
    }
}

// export function addService(service) {
//     return {
//     type: UPDATE_SERVICE,
//     payload: service
//     }
// }