import { DEC_COUNTER, INC_COUNTER } from "./action.type";

export const counterReducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case INC_COUNTER: {
      state.count++;
      return { ...state };
    }
    case DEC_COUNTER: {
      state.count--;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
