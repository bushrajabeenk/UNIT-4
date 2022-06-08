import {
  ADD_TODO,
  COMPLETE_TODO,
  DEC_COUNTER,
  INC_COUNTER,
  DELETE_TODO,
  UPDATED_TODO,
} from "./action.type";

export const counterInc = () => ({ type: INC_COUNTER });
export const counterDec = () => ({ type: DEC_COUNTER });

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const completeTodo = (id) => ({ type: COMPLETE_TODO, payload: id });
export const updateTodo = (payload) => ({ type: UPDATED_TODO, payload });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
