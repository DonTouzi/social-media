import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("random title");

  const handleClick = () => {
    if (title === "random title") return setTitle("Hello Wrold");
    setTitle("random title");
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
