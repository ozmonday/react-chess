import { createContext, useEffect, useState } from "react";
import Square from "./components/Square";
import { posiblePositionKnight } from "./utility/movement";

export const BoardContext = createContext({
  position: null,
  setPostion: () => {},
});

export const ActiveContext = createContext({
  current: null,
  setCurrent: () => {},
});

const swap = (arr, source, target) => {
  if (arr[target[0]][target[1]] === null && posiblePositionKnight(source, target)) {
    let temp = arr[source[0]][source[1]];
    arr[source[0]][source[1]] = arr[target[0]][target[1]];
    arr[target[0]][target[1]] = temp;
  } else {
    const condition = target[0] === source[0] && target[1] === source[1]
    if(!condition) {
      alert("Knight can't be place at hire.")
    }
  }
};

function App() {
  const [active, setActive] = useState(null);
  const [board, setBoard] = useState([
    [null, "knight", null, null, null, null, "knight", null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ]);

  const handleUpdatePosition = (tgt) => {
    if (active !== null) {
      let newPostion = board;
      swap(newPostion, active, tgt);
      setBoard([...newPostion]);
      setActive(null);
    }
  };

  useEffect(() => {
    console.log(board);
  }, [board]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <BoardContext.Provider
        value={{ position: board, setPostion: handleUpdatePosition }}
      >
        <ActiveContext.Provider
          value={{ current: active, setCurrent: setActive }}
        >
          <div
            style={{
              display: "grid",
              width: "90vh",
              height: "90vh",
              marginRight: "auto",
              marginLeft: "auto",
              border: "0.2rem solid ",
              gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
            }}
          >
            {board.map((value, row) =>
              value.map((value, col) => (
                <Square
                  key={`${row}${col}`}
                  row={row}
                  col={col}
                  value={value}
                />
              ))
            )}
          </div>
        </ActiveContext.Provider>
      </BoardContext.Provider>
    </div>
  );
}

export default App;
