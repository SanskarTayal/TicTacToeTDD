import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Board from "../Components/Board";

describe("Game Implementation tests", ()=>{
    it("should declare the winner",()=>{
        const {getAllByTestId ,getByTestId} = render(<Board />);
        const squares = getAllByTestId("Square");
        fireEvent.click(squares[0]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[2]);
        fireEvent.click(squares[3]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[5]);
        fireEvent.click(squares[8]);
        expect(getByTestId('StatusSection')).toHaveTextContent("Winner: X");

        
    }),
    it("should declare the game Draw when no one wins",()=>{
        const {getAllByTestId ,getByTestId} = render(<Board />);
        const squares = getAllByTestId("Square");
        fireEvent.click(squares[0]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[2]);
        fireEvent.click(squares[3]);
        fireEvent.click(squares[5]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[6]);
        fireEvent.click(squares[8]);
        fireEvent.click(squares[7]);
        expect(getByTestId('StatusSection')).toHaveTextContent("Draw"); 
    });
})