import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "subtract" })}>-</button>
        <button onClick={() => dispatch({ type: "add" })}>+</button>
      </div>
    </div>
  );
}

export default App;
