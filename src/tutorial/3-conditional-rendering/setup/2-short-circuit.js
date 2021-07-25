import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = !text && "hello world";

  return (
    <React.Fragment>
      <h3>{text || "jhon doe"}</h3>
      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        toggle error
      </button>
      {isError ? <h3>Error</h3> : <h3>No error</h3>}
    </React.Fragment>
  );
};

export default ShortCircuit;
