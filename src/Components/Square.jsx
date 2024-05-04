import React from "react";
export default function Square({value, onSquareClick}) {
    return <button className="square" data-testid='Square' onClick={onSquareClick}>{value}</button>;
  }
  