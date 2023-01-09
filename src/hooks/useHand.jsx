import { useState, useEffect, useContext } from "react";
import BoardContext from "../BoardContext";

const useHand = () => {
  const { hand, setHand, deck, setDeck } = useContext(BoardContext);
  const [handLimit, setHandLimit] = useState(false);

  //Checking if hand is full
  useEffect(() => {
    if (hand.length > 2) {
      setHandLimit(true);
    } else {
      setHandLimit(false);
    }
    // console.log(hand);
  }, [hand]);

  // card draw
  let cardDraw = (
    source = deck,
    setSource = setDeck,
    numOfCards = 1,
    target = 0
  ) => {
    if (handLimit) {
      return;
    }
    let tempHand = [...hand];
    let tempDeck = [...source];
    for (let i = 0; i < numOfCards; i++) {
      let drawnCard = tempDeck.splice(target, 1);
      if (drawnCard.length > 0) {
        tempHand.push(drawnCard[0]);
      }
    }
    setSource(tempDeck);
    setHand(tempHand);
  };

  // card discard
  // let removeCard = (selectedCard, action = "discard") => {
  //   setHand(hand.filter((card) => card !== selectedCard));
  //   let removed = selectedCard;

  //   switch (action) {
  //     case "play":
  //       playCard(removed, removed.type);
  //       break;
  //     case "discard":
  //       discard(removed);
  //       break;
  //     default:
  //       console.log("aha yes i am the default man");
  //       break;
  //   }
  // };

  return { cardDraw };
};

export default useHand;
