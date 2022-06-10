import React from "react";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodos } from "./../store/todo/todo.actions";

const Todo = () => {
  const ref = useRef();

  const dispatch = useDispatch();

  const { loading, error, data: todos } = useSelector((state) => state.todo.getTodos);

  const { loading: addButtonLoading } = useSelector(
    (state) => state.todo.addTodos
  );

  const addNew = () => {
    let value = ref.current.value;
    addTodo(dispatch, {
      value: value,
      isCompleted: false,
    });
    ref.current.value = null;
  };

  useEffect(() => {
    getTodos(dispatch);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  else if (error) return <h1>Something went wrong</h1>;
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input ref={ref} type="text" />
        <button disabled={addButtonLoading} onClick={addNew}>Add todo</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
  );
};

export default Todo;
