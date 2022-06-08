import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./store/action.type";

function App() {
  const dispatch = useDispatch();

  // used to read value from store.
  const count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch({ type: COUNTER_DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: COUNTER_INCREMENT })}>+</button>
      </div>
    </div>
  );
}

export default App;
