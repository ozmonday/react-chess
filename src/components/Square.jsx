import React from "react";
import { useContext } from "react";
import { BoardContext } from "../App";
import Pawn from "./Pawn";

const Square = ({ row, col, children, value }) => {
  const { setPostion } = useContext(BoardContext);

  const color = (row, col) => {
    if (row % 2 === 0) {
      return col % 2 === 0 ? "#9CA3AF" : "#FFFFFF";
    } else {
      return col % 2 === 0 ? "#FFFFFF" : "#9CA3AF";
    }
  };

  const handleOnClick = () => {
    //alert(`${row}, ${col}`);
    const target = [row, col];
    setPostion(target);
  };

  return (
    <div
      onClick={handleOnClick}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: color(row, col),
      }}
    >
      <Pawn row={row} col={col} type={value} />
    </div>
  );
};

export default Square;
