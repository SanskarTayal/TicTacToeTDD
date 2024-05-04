import React from "react";
export default function Square({value},{onSquareClick}) {
    return <button className="square" data-TestId='Square' onClick={onSquareClick}>{value}</button>;
  }
  