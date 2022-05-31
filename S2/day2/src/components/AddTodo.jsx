import React, { useState } from "react";

const AddTodo = ({ addTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add task..."
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button
        onClick={() => {
          addTodos(newTodo)
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
