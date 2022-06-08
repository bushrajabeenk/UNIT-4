import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./action.type";

export const reducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + payload };
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - payload };
    }
    default: {
      return state;
    }
  }
};
