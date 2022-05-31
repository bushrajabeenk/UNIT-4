import React, { useState, useRef } from "react";

const StopwatchuseRef = () => {
    const [watch, setWatch] = useState(0);
    const timerId = useRef(null);
  
    const start = () => {
      if (!timerId.current) {
        let id = setInterval(() => {
          setWatch((prev) => prev + 1);
        }, 300);
        timerId.current = id;
      }
    };
  
    const pause = () => {
      clearInterval(timerId);
      timerId.current = null;
    };
  
    const reset = () => {
      clearInterval(timerId);
      setWatch(0);
      timerId.current = null;
    };
  
    return (
      <div>
        <h1>Stopwatch</h1>
        <h3>{watch}</h3>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    );
  };
export default StopwatchuseRef