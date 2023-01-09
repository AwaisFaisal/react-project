import Hand from "./Hand";

import Deck from "./Deck";
import Field from "./Field";
import Discard from "./Discard";

import useField from "../hooks/useField";
import useDiscard from "../hooks/useDiscard";

const Board = () => {
  const { playCard } = useField();
  const { discardCard } = useDiscard();

  return (
    <div>
      <Hand playCard={playCard} discard={discardCard} />
      <Deck />
      <Field />
      <Discard />
    </div>
  );
};

export default Board;
