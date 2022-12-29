import { useState, useEffect } from "react";
// import { useDeck } from "./useDeck";

export const useHand = (deck, setDeck) => {
  const [hand, setHand] = useState([]);

  useEffect(() => {
    console.log(hand);
  }, [hand]);

  //remove card from top of deck and return it
  let cardDraw = () => {
    if (deck.length === 0) {
      console.log("out of cards bub");
      return;
    }
    let drawnCard = deck[0];
    console.log(drawnCard);
    setDeck(deck.slice(1));
    return drawnCard;
  };

  // add drawn card from card Draw function to hand
  let addCard = (numOfCards) => {
    let tempHand = [...hand];
    for (let i = 0; i < numOfCards; i++) {
      const drawnCard = cardDraw();

      if (!drawnCard) {
        console.log("oh uh empty");
        return;
      }
      tempHand.push(drawnCard);
    }
    setHand(tempHand);
  };
  //let discard = () => {}

  return [hand, addCard];
};
