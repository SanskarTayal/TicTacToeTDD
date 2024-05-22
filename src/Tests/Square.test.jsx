import Square from "../Components/Square";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


describe("Square Component", () => {
    it("should render new Square", () => {
        render(<Square value='X' />)
        const square = screen.getByRole("button");
        expect(square).toHaveTextContent('X');
    })
    it('should call clickButton upon click', () => {
        const clickButton = jest.fn();
        const { getByTestId } = render(<Square value={'X'} onClick={clickButton} />)
        const Component = getByTestId('Square');
        Component.click();
        expect(clickButton).toHaveBeenCalled;
    })
});
