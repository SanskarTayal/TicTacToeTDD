import Square from "../Components/Square";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


describe("Square is rendered with a value given to it",()=>{
it("Renders New Square", ()=>{
    render(<Square value='X'/>)
    const square = screen.getByRole("button");
    expect(square).toHaveTextContent('X');
})
it('Should call clickButton upon click',()=>{
    const clickButton= jest.fn();
    const {getByTestId} = render(<Square value={'X'} onClick = {clickButton}/>)
    const Component = getByTestId('Square');
    Component.click();
    expect(clickButton).toHaveBeenCalled;
})
});
