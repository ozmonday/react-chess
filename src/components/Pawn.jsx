import React from "react";
import { useContext } from "react";
import { ActiveContext } from "../App";
import knight from "../assets/chess-knight.svg";

const Pawn = ({ row, col, type }) => {
  const { current, setCurrent } = useContext(ActiveContext);

  const handleOnClick = () => {
    if(current !== null && current[0] === row && current[1] === col) {
      setCurrent(null);
    } else {
      setCurrent([row, col]);
    }
  };

  if (type === null) {
    return;
  }

  return (
    <div
      onClick={handleOnClick}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "auto",
          objectFit: "cover",
          backgroundColor: current !== null && current[0] === row && current[1] === col ? "#FDE68A" : "transparent",
        }}
        alt="knight"
        src={knight}
      />
    </div>
  );
};

export default Pawn;
