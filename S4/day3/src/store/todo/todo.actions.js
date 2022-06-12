import {
  // COMPLETE_TODO,
  // UPDATED_TODO,
  // DELETE_TODO,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  GET_TODOS_LOADING,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_ERROR,
} from "./todo.types";
import axios from "axios";

export const gettingTodosFunc = () => (dispatch) => {
  dispatch({ type: GET_TODOS_LOADING });
  return axios
    .get("http://localhost:8080/todos")
    .then((r) => {
      // setTimeout(() => {
      dispatch({ type: GET_TODOS_SUCCESS, payload: r.data });
      // }, 5000);
    })
    .catch(() => {
      dispatch({ type: GET_TODOS_ERROR });
    });
};

export const addingTodoFunc = (payload) => (dispatch) => {
  dispatch({ type: ADD_TODOS_LOADING });
  axios
    .post("http://localhost:8080/todos", payload)
    .then((r) => {
      dispatch({ type: ADD_TODOS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: ADD_TODOS_ERROR });
    });
};

// export const completeTodo = (id) => ({ type: COMPLETE_TODO, payload: id });
// export const updateTodo = (payload) => ({ type: UPDATED_TODO, payload });
// export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
