import React from "react";
import { useDeck } from "./useDeck";
import { useHand } from "./useHand";

const Hand = () => {
  const [deck, setDeck, shuffle] = useDeck([]);
  const [hand, addCard] = useHand(deck, setDeck);

  return (
    <div>
      {deck.map((card, index) => (
        <div key={index}>
          <h3>{card.name}</h3>
        </div>
      ))}
      <button onClick={shuffle}>Shuffle the deck</button>
      <button onClick={() => addCard(2)}>This is card draw</button>
      {hand.map((card, index) => (
        <h2 key={index}>{card.name}</h2>
      ))}
    </div>
  );
};

export default Hand;
