import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from './../store/todo/todo.actions';

const Todo = () => {
  const ref = useRef();

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  const addNew = () => {
    let value = ref.current.value;
    dispatch(
      addTodo({
        value: value,
        isCompleted: false,
      })
    );
    ref.current.value = null;
  };

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input ref={ref} type="text" />
        <button onClick={addNew}>Add todo</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
  );
};

export default Todo;
