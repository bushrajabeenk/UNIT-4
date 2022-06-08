import {COUNTER_INCREMENT, COUNTER_DECREMENT} from "./action.type";


// action creator 

export const add = (payload) => {
    return {
        type: COUNTER_INCREMENT,
        payload
    }
}

export const subtract = (payload) => {
    return {
        type: COUNTER_DECREMENT,
        payload
    }
}

