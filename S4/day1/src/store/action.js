import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./action.type";

// action creator

export const add = () => {
  return {
    type: COUNTER_INCREMENT,
    payload: 2,
  };
};

export const subtract = () => {
  return {
    type: COUNTER_DECREMENT,
    payload: 5,
  };
};
