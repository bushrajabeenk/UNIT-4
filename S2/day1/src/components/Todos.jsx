import React, { useState, useEffect } from "react";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const saveInfo = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
        isCompleted: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo("");
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/todos?_page=1&_limit=5")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  // without useEffect, fetch keeps running fetch infinitely, as state change leads to re-render, this will keep repeating,
  // to perform fetch operation only once use useEffect, API will run only once, i.e when the first time the component is rendered
  // but useEffect will also run infinite times whenever the state is changed,
  // therefore empty array is passed

  return (
    <div>
      <div>
        <input
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
        <button onClick={() => saveInfo()}>+</button>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
