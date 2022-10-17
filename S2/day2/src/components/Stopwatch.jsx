import React from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [watch, setWatch] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const start = () => {
    let id = setInterval(() => {
      setWatch((prev) => prev + 1);
    }, 1000);
    setTimerId(id);
  };

  const pause = () => {
    clearInterval(timerId);
  };

  const reset = () => {
    clearInterval(timerId);
    setWatch(0);
  };

  return (
    <div>
      <h2>Stopwatch: {watch}</h2>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
