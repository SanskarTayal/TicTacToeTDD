import React, { useState } from "react"
import Square from "./Square";
import calculateWinner from "../util/CalculateWinner"
export default function Board() {
    const [count, setCount] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setsquares] = useState(Array(9).fill(null));
    function handleClick(i) {

        if (squares[i] || calculateWinner(squares))
            return;
        setCount(count + 1);
        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = 'X';
            setXIsNext(false);
        }
        else {
            newSquares[i] = 'O';
            setXIsNext(true);
        }
        setsquares(newSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }
    else if (count === 9) {
        status = 'Draw'

    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    function generateRow(rowNo) {
        const arr = [];
        for (let i = (rowNo - 1) * 3; i < (rowNo * 3); i++)
            arr.push(<Square value={squares[i]} onSquareClick={() => handleClick(i)} />);
        return arr;

    }

    return <>
        <div className="Status" data-Testid='StatusSection'> {status} </div>
        <div className="board-row">
            {generateRow(1)}
        </div>
        <div className="board-row">
            {generateRow(2)}
        </div>
        <div className="board-row">
            {generateRow(3)}
        </div>
    </>
};