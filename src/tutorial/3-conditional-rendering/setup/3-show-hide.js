import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <Item />}
      <button type="button" className="btn" onClick={() => setShow(!show)}>
        hide / show
      </button>
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div>
      <h1>window</h1>
      <h1>size : {size} px</h1>
    </div>
  );
};

export default ShowHide;
