import React, { useState } from "react"
import Square from "./Square";
export default function Board(){
    const [status, setStatus]= useState("Next Turn of X");
    const [xIsNext, setXIsNext] = useState(true);
    const[squares, setsquares]=useState(Array(9).fill(null));
    function handleClick(i){ 
        if(squares[i])
            return;
        const newSquares = squares.slice();
        if(xIsNext){
            newSquares[i]='X';
            setXIsNext(false);
            setStatus("Next Turn of O");
            }
        else
        {
            newSquares[i]='O';
            setXIsNext(true);
            setStatus("Next Turn of X");
        }
        setsquares(newSquares);
        return
    }
    return <>
    <div className="Status" data-TestID='StatusSection'> {status} </div>
    <div className="board-row"> 
        <Square value={squares[0]} onSquareClick = {()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick = {()=>{handleClick(1)}}/>
        <Square value={squares[2]} onSquareClick = {()=>{handleClick(2)}}/>
    </div>
    <div className="board-row"> 
        <Square value={squares[3]} onSquareClick = {()=>{handleClick(3)}}/>
        <Square value={squares[4]} onSquareClick = {()=>{handleClick(4)}}/>
        <Square value={squares[5]} onSquareClick = {()=>{handleClick(5)}}/>
    </div>
    <div className="board-row"> 
        <Square value={squares[6]} onSquareClick = {()=>{handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick = {()=>{handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick = {()=>{handleClick(8)}}/>
    </div>
        </>
};