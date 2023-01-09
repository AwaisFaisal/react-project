import { useContext } from "react";
import BoardContext from "../BoardContext";
import useDeck from "../hooks/useDeck";

const Deck = () => {
  useDeck();
  const { deck } = useContext(BoardContext);
  return (
    <div>
      {deck.length === 0 ? (
        <h1>you're out of cards</h1>
      ) : (
        deck.map((card, i) => (
          <div style={deckStyle} key={i}>
            <span>{card.title}</span>
            <span>{card.text}</span>
          </div>
        ))
      )}
    </div>
  );
};

let deckStyle = {
  border: "2px solid violet",
  // position: "absolute",
  fontSize: "20px",
  display: "flex",
  flexDirection: "column",
};
export default Deck;
