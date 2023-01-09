import React from "react";
import { useContext, useEffect } from "react";
import BoardContext from "../BoardContext";

const useCardRemove = () => {
  const { field, setField } = useContext(BoardContext);
  const { discardPile, setDiscardPile } = useContext(BoardContext);

  const playCard = (selectedCard, cardType) => {
    let tempField = [...field, selectedCard];
    setField(tempField);
  };

  const discardCard = (selectedCard) => {
    let tempDiscard = [...discardPile, selectedCard];
    setDiscardPile(tempDiscard);
  };

  return { playCard, discardCard };
};

export default useCardRemove;
