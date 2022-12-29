export let drawCard = (num, deck, hand) => {
  if (deck.length === 0) {
    console.log("out of cards bub");
    return;
  }
  let drawnCard = deck[0];
  console.log(drawnCard);
  deck = deck.slice(1);
  for (let i = 0; i < num.length; i++) {
    if (!drawnCard) {
      console.log("oh uh empty");
      return;
    }
    hand = [...hand, drawnCard];
    console.log(hand);
  }

  return deck;
};

// export let addCard = (numOfCards, hand, deck) => {
//   for (let i = 0; i < numOfCards; i++) {
//     const drawnCard = drawCard(deck);
//     if (!drawnCard) {
//       console.log("oh uh empty");
//       return;
//     }
//     hand = [...hand, drawnCard];
//     console.log(hand);
//   }
// };
