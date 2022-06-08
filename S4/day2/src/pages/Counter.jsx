import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterInc, counterDec } from "../store/action";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(counterInc())}>+</button>
      <button onClick={() => dispatch(counterDec())}>-</button>
    </div>
  );
};

export default Counter;
