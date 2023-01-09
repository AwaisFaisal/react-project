import { useContext, useEffect } from "react";
import BoardContext from "../BoardContext";

const useField = () => {
  const { field, setField } = useContext(BoardContext);

  useEffect(() => console.log(field), [field]);

  const handleCardType = (cardType) => {
    switch (cardType) {
      case "unit":
        console.log("I am a unit");
        break;
      case "spell":
        console.log("I am a spell");
        break;
      default:
        console.log("I am default");
    }
  };

  const playCard = (selectedCard, cardType) => {
    let tempField = [...field, selectedCard];
    setField(tempField);
    handleCardType(cardType);
  };

  return { playCard };
};

export default useField;
