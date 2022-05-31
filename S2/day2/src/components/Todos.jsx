import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totCount, setTotCount] = useState(0);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const getTodos = async () => {
      let res = await axios.get(
        `http://localhost:3000/todos/?_page=${pageNum}&_limit=${limit}`
      );
      let data = res.data;
      setTodos(data);
      setTotCount(Number(res.headers["x-total-count"]));
    };
    getTodos();
  }, [pageNum, limit]);

  const addTodos = async (newTodo) => {
    let response = await axios.post(`http://localhost:3000/todos/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        text: newTodo,
      }),
    });
    setTodos([...todos, response.data]);
  };

  return (
    <div>
      <button
        disabled={pageNum <= 1}
        onClick={() => {
        //   if (pageNum > 1) {
            setPageNum(pageNum - 1);
          //}
        }}
      >
        {" "}
        {`<`}{" "}
      </button>
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <button
        disabled={totCount < pageNum * 5}
        onClick={() => setPageNum(pageNum + 1)}
      >{`>`}</button>
      <AddTodo addTodos={addTodos} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
