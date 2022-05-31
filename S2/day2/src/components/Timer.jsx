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

    return () => {
        // call an api to inform that user has logged out
        clearInterval(id);
    }
    // component is unmounting
  }, []);

  return <div>Count Down: {timer}</div>;
};

export default Timer;
