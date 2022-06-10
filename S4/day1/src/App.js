import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { add, subtract } from "./store/action";
// import { store } from "./store/store";

function App() {
  const dispatch = useDispatch();

  // used to read value from store.
  const count = useSelector((store) => store.count);

  // different wayof getting store value
  // const data = store.getState();
  // console.log(data)

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add())}>+</button>
        {/* <button onClick={() => store.dispatch(add())}>+</button> */}

        <button onClick={() => dispatch(subtract())}>-</button>
      </div>
    </div>
  );
}

export default App;
