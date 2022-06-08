import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./action.type";

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + action.payload };
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - action.payload };
    }
    default: {
      return state;
    }
  }
};
