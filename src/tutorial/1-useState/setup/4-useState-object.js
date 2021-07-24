import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Walid",
    age: 28,
    message: "Lorem ipsum dolor sit amet",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hi guys, how are you!" });
  };
  return (
    <>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button type="button" className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
