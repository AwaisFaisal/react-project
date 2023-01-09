import React from "react";
import { useContext } from "react";

import BoardContext from "../BoardContext";

const Field = () => {
  const { field } = useContext(BoardContext);

  return (
    <div style={boardField}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {field.map((item, index) => (
          <div key={index} style={fieldStyle}>
            <span>{item.title}</span>
            <span>{item.text}</span>
            <span>{item.mana}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

let fieldStyle = {
  border: "1px solid crimson",
  color: "white",
  margin: "20px, auto",
  padding: "30px",
};

let boardField = {
  border: "1px solid yellow",
  backgroundColor: "gray",
  minHeight: "500px",
};

export default Field;
