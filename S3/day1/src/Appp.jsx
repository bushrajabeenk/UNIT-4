import React, { useReducer } from "react";

const reducer = (state, action) => {
  // const reducer = (counter, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, counter: state.counter + action.payload };
      //   return counter + 1;
    }
    case "DECREMENT": {
      return { ...state, counter: state.counter - 1 };
      //   return counter - 1;
    }
    default: {
      return state;
      //   return counter;
    }
  }
};

function Appp() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  //   const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      Counter: {state.counter}
      {/* Counter: {counter} */}
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        INC
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 100 })}>
        DEC
      </button>
    </div>
  );
}

export default Appp;
