import React from "react";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addingTodoFunc, gettingTodosFunc } from "./../store/todo/todo.actions";

const Todo = () => {
  const ref = useRef();

  const dispatch = useDispatch();

  const { getTodo, addTodo, data: todos } = useSelector((state) => state.todo);

  const addNew = () => {
    let value = ref.current.value;
    addingTodoFunc(dispatch, {
      value: value,
      isCompleted: false,
    });
    ref.current.value = null;
  };

  useEffect(() => {
    gettingTodosFunc(dispatch);
  }, []);

  if (getTodo.loading) return <h1>Loading...</h1>;
  else if (getTodo.error) return <h1>Something went wrong</h1>;
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input ref={ref} type="text" />
        <button disabled={addTodo.loading} onClick={addNew}>Add todo</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
  );
};

export default Todo;
