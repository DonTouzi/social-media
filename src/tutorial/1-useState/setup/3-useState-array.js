import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => (
        <div key={person.id} className="item">
          {person.name}
          <button onClick={() => removeItem(person.id)}>remove item</button>
        </div>
      ))}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
      <button
        type="button"
        className="btn"
        onClick={setPeople.bind(this, data)}
      >
        add items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
