import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ card, id }) => {
  console.log(card);
  const [, drag] = useDrag({
    type: "CARD",
    item: id,
  });
  return (
    <div>
      <div style={cardStyle} ref={drag}>
        <h2>{card.title}</h2>
        <span>{card.text}</span>
      </div>
    </div>
  );
};

let cardStyle = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  margin: "20px 2px",
};

export default Card;
