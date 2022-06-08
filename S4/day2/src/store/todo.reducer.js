import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATED_TODO,
} from "./action.type";

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return { ...state };
    }
    case DELETE_TODO: {
      return { ...state };
    }
    case COMPLETE_TODO: {
      return { ...state };
    }
    case UPDATED_TODO: {
      return { ...state };
    }
    default: {
      return state;
      // we are not making any changes on the state
      // in the above case, so no necessity of destructuring
      // it into another new object
    }
  }
};
