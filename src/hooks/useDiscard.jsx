import { useContext } from "react";

import BoardContext from "../BoardContext";

const useDiscard = () => {
  const { discardPile, setDiscardPile } = useContext(BoardContext);

  let discardCard = (selectedCard) => {
    let tempDiscard = [...discardPile, selectedCard];
    setDiscardPile(tempDiscard);
  };

  return { discardCard };
};

export default useDiscard;
