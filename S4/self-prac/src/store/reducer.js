import { INC_COUNT, DEC_COUNT } from "./actions.types";

export const reducer = (state = { count: 0 }, { type, payload }) => {
  switch (type) {
    case INC_COUNT: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case DEC_COUNT: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    default: {
      return state;
    }
  }
};
