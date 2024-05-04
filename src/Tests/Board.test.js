import { render,screen,fireEvent } from "@testing-library/react";
import React, { Component } from "react";
import '@testing-library/jest-dom/extend-expect';
import Board from "../Components/Board";

describe("Rendering the Board",()=>{
    it("should have a Status initially indicating X's Turn ",()=>{
    const{getByTestId}=render(<Board />);
    const Component=getByTestId('StatusSection');
    expect(Component).toHaveTextContent("Next player: X")})
,
    it('should have a empty Board made with 9 Squares',()=>{
        const {getAllByTestId}= render(<Board />);
        const squares = getAllByTestId("Square");
        expect(squares.length).toBe(9);
    })
});

describe("Board's Functionality",()=>{
    it("should rotate turns on click",()=>
    {
        const {getAllByTestId ,getByTestId} = render(<Board />);
        const squares = getAllByTestId("Square");
        fireEvent.click(squares[0]);
        expect(getByTestId('StatusSection')).toHaveTextContent("Next player: O");
        expect(squares[0]).toHaveTextContent('X');
        fireEvent.click(squares[1]);
        expect(squares[1]).toHaveTextContent('O');

    }),

    it("should not change square once filled",()=>
    {
        const {getAllByTestId ,getByTestId} = render(<Board />);
        const squares = getAllByTestId("Square");
        fireEvent.click(squares[0]);
        expect(squares[0]).toHaveTextContent('X');
        fireEvent.click(squares[0]);
        expect(squares[0]).toHaveTextContent('X');

    })
});