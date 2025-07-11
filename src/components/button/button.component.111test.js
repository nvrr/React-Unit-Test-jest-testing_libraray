import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonComponent } from "./button.component";


test('should call onClick', () => {
    const handleClick = jest.fn(() => 1);
    render(<ButtonComponent handleClick={handleClick} />);
  
    //click the event click with text //Click Me//
    fireEvent.click(screen.getByText(/Click Me/i));
    expect(handleClick).toHaveBeenCalledTimes(1)
  
    expect(handleClick.mock.results[0].value).toBe(1)
  })

describe('values cjeck: ', () => {
    test('should call onClick', () => {
        const handleClick = jest.fn(() => 1);
        render(<ButtonComponent handleClick={handleClick} />);
      
        //click the event click with text //Click Me//
        fireEvent.click(screen.getByText(/Click Me/i));
        expect(handleClick).toHaveBeenCalledTimes(1)
    
      })

      test('should call onClick', () => {
        const handleClick = jest.fn(() => 1);
        render(<ButtonComponent handleClick={handleClick} />);
      
        //click the event click with text //Click Me//
        fireEvent.click(screen.getByText(/Click Me/i));
        expect(handleClick).toHaveBeenCalledTimes(1)
      
        expect(handleClick.mock.results[0].value).toBe(1)
      })
})



