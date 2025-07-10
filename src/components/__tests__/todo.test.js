import { render, screen,cleanup } from '@testing-library/react';
import { Todo } from '../Todo';

//-------------start
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
//------------------end
//hg ''

test('test', ()=> {
  expect(true).toBe(true)
})

test('test1: should render todo component', ()=> {
    render(<Todo/>); // did component render or not
    const todoElement = screen.getByTestId('todo'); 
    expect(todoElement).toBeInTheDocument()
    
  })

  
  test('test2: todo text should be Kello Woeld!', ()=> {
      render(<Todo/>);
      const todoElement = screen.getByTestId('todo');
      expect(todoElement).toHaveTextContent('Kello World!')
      
    })
  