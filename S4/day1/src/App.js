import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { add, subtract } from "./store/action";

function App() {
  const dispatch = useDispatch();

  // used to read value from store.
  const count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add())}>+</button>
        <button onClick={() => dispatch(subtract())}>-</button>
      </div>
    </div>
  );
}

export default App;
