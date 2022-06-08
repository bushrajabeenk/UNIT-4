import { DEC_COUNTER, INC_COUNTER } from "./counter.types";

export const counterReducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case INC_COUNTER: {
      return { ...state, count: state.count + payload };
    }
    case DEC_COUNTER: {
      return { ...state, count: state.count - payload };
    }
    default: {
      return state;
    }
  }
};
