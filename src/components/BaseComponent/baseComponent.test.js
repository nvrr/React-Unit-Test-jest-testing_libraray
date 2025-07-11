
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import { BaseComponent } from "./baseComponent"
import userEvent from "@testing-library/user-event";


describe('<BaseComponent/>: ', () => {
  test('should bring button element:', () => {
    render(<BaseComponent />);

    const el = screen.getByRole("button", {name:'Activations' })
    expect(el).toBeInTheDocument()
})

test('should not bring paragraph element', () => {
    render(<BaseComponent />);
  const el = screen.queryByTestId('baseParagraph')

  expect(el).not.toBeInTheDocument();
})

test("should bring button element enabled", () => {
    render(<BaseComponent />);

    const element = screen.getByRole("button", { name: "Activations" });

    expect(element).not.toBeDisabled();
  });

  test("should bring button element disabled with disabled props", () => {
    render(<BaseComponent disabled />);

    const element = screen.getByRole("button", { name: "Activations" });

    expect(element).toBeDisabled();
  });





})

describe('<BaseComponent: user interactions: ', () => {
  beforeEach(() => {
    render(<BaseComponent/>)
  })

  test('should bring paragraph with clicked quantity after button click: ', () => {
    const buttonElement = screen.getByRole("button", {name: 'Activations'});

    userEvent.click(buttonElement)

    const paragraphElement = screen.queryByTestId('baseParagraph');

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent(1);
  });

  test('should bring paragraph with clicked quantity after double button click: ', () => {
    const buttonElement = screen.getByRole('button', {name: 'Activations'});

    userEvent.dblClick(buttonElement)

    const paragraphElement = screen.queryByTestId('baseParagraph');

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent(2)
  })
  
  
})


//gh ''

// Purpose of describe() in Testing
// Purpose	Why it helps
// Organize tests	Groups similar tests together for better readability
// Set shared setup/teardown	Use beforeEach, afterEach, etc. inside it cleanly
// Improve test output	Console shows hierarchical names like: "MyComponent > renders a button"
// Avoid duplication	You can avoid repeating setup/render code in every test