import React from "react";
import { useContext } from "react";
import BoardContext from "../BoardContext";

const Discard = () => {
  const { discardPile } = useContext(BoardContext);

  return (
    <div>
      {discardPile.map((card, index) => (
        <div key={index} style={discardStyle}>
          <h1>{card.title}</h1>
          <h3>{card.mana}</h3>
        </div>
      ))}
    </div>
  );
};

let discardStyle = {
  border: "2px solid maroon",
};

export default Discard;
