export const useCardAction = (drawFrom, drawTo, setDrawFrom, setDrawTo) => {
  const drawCard = (times = 1, target = 0) => {
    let tempNext = [...drawTo];
    let tempCurr = [...drawFrom];

    for (let i = 0; i < times; i++) {
      let drawnCard = tempCurr.splice(target, 1);
      if (drawnCard.length > 0) {
        tempNext.push(drawnCard[0]);
      }
    }

    setDrawFrom(tempCurr);
    setDrawTo(tempNext);

    return { drawFrom, drawTo };

    console.log(drawFrom);
    console.log(drawTo);
  };

  return { drawCard };
};
