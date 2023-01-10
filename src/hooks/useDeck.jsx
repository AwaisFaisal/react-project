// import { useCallback } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import BoardContext from "../BoardContext";

const useDeck = () => {
  const { setDeck } = useContext(BoardContext);

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        let response = await fetch("http://localhost:3000/cards.json");
        let data = await response.json();
        setDeck(data.cards);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDeck();
  }, []);

  // shuffle the deck
  let shuffle = (deck) => {
    let shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    setDeck(shuffledDeck);
  };

  return [shuffle];
};

export default useDeck;
