import { useState, useEffect } from "react";

export const useDeck = () => {
  const [deck, setDeck] = useState([]);

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

  // useEffect(() => {
  //   console.log(deck);
  // }, [deck]);

  // shuffle the deck
  let shuffle = () => {
    let shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    setDeck(shuffledDeck);
  };

  return [deck, setDeck, shuffle];
};
