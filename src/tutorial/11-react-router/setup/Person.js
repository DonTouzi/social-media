import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const { name } = useParams();
  const [person, setPerson] = useState("default name");

  useEffect(() => {
    const newPerson = data.find((person) => person.name === name);
    setPerson(newPerson.name);
  }, []);

  return (
    <div>
      <h1>{person}</h1>
      <Link to="/people" className="btn">
        Back
      </Link>
    </div>
  );
};

export default Person;
