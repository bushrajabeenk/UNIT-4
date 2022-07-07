import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      if (timer > 100) {
        clearInterval(id);
      } else {
        setTimer(timer + 1);
      }
    }, 1000);


    //  these are called cleanup functions
    // if the component is unmounted before the setInterval
    // time runs out. For example in the above case, it is given 1000
    // if the component is unmounted, ie if the component App
    // is removed from the UI before the completion of 1000s
    // ie if we remove App itself (which in turn contains Timer.jsx as component)
    // then we don't want the timer to keep running, because the App
    // itself is removed from UI, we don't want the timer to keep running
    // so to stop the timer from running in such cases
    // we use cleanup functiom
    return () => {
      // call an api to inform that user has logged out
      clearInterval(id);
    };
    // component is unmounting
  }, []);

  return <div>Count Down: {timer}</div>;
};

export default Timer;
