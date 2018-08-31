
export const UPDATE_GREETING = "UPDATE_GREETING";

export function addGreeting(greeting) {
    return {
    type: UPDATE_GREETING,
    payload: greeting
    }
}