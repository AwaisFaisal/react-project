import Board from "./board-components/Board";
import { useState } from "react";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import BoardContext from "./BoardContext";

function App() {
  const [hand, setHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [field, setField] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);

  const opts = {
    enableMouseEvents: true,
    enableTouchEvents: false,
  };

  return (
    <DndProvider backend={TouchBackend} options={opts}>
      <BoardContext.Provider
        value={{
          hand,
          setHand,
          deck,
          setDeck,
          field,
          setField,
          discardPile,
          setDiscardPile,
        }}
      >
        <Board />
      </BoardContext.Provider>
    </DndProvider>
  );
}

export default App;
