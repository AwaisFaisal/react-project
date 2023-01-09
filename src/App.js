import Board from "./board-components/Board";
import { useState } from "react";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import BoardContext from "./BoardContext";

function App() {
  const [hand, setHand] = useState([]);
  const [deck, setDeck] = useState([]);
  const [field, setField] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);

  const options = { enableMouseEvents: true };

  return (
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
      <DndProvider backend={TouchBackend} options={options}>
        <Board />
      </DndProvider>
    </BoardContext.Provider>
  );
}

export default App;
