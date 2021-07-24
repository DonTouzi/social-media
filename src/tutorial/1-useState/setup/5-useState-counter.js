import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const complexIncrement = () => {
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <>
      <h1 style={{ margin: "20px auto" }}>simple counter</h1>
      <h2>{counter}</h2>
      <button type="button" className="btn" onClick={decrement}>
        -
      </button>
      <button type="button" className="btn" onClick={reset}>
        reset
      </button>
      <button type="button" className="btn" onClick={increment}>
        +
      </button>
      <h1 style={{ margin: "20px auto" }}>complex counter</h1>
      <h2>{counter}</h2>
      <button type="button" className="btn" onClick={complexIncrement}>
        increase with delay
      </button>
    </>
  );
};

export default UseStateCounter;
