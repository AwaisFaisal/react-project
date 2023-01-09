import { useContext } from "react";
import BoardContext from "../BoardContext";
import useHand from "../hooks/useHand";
import Card from "./Card";

const Hand = () => {
  const { hand } = useContext(BoardContext);
  const { cardDraw } = useHand();

  return (
    <div>
      <button onClick={() => cardDraw()}>This is card draw</button>
      <div style={handStyle}>
        {hand.map((card, index) => (
          <Card key={index} card={card} id={card.id} />
        ))}
      </div>
    </div>
  );
};

let handStyle = {
  display: "flex",
  jusitfyContent: "space-evenly",
};
export default Hand;
