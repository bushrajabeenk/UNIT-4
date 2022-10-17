import React, { useState, useRef } from "react";

const StopwatchuseRef = () => {
  const [watch, setWatch] = useState(1000);
  const timerId = useRef(null);

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 100);
      }, 100);
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
      <h3>{msToTime(watch)}</h3>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
export default StopwatchuseRef;


// The useRef Hook allows you to persist values between renders. It can be used to store a mutable 
// value that does not cause a re-render when updated.

// both the hooks useState and useRef are a bit similar. The difference is that useState returns the 
// current state and has an updater function that updates the state. While useRef returns an object, 
// doesn't cause components to re-render, and it's used to reference DOM elements.
