import { fireEvent, render } from "@testing-library/react"
import { RegisterForm } from "./registerForm"


test('should render register form: ', () => {
  const {getByLabelText, getByText} = render(<RegisterForm/>);

  expect(getByLabelText(/User Name:/i)).toBeInTheDocument();
  expect(getByLabelText(/Email:/i)).toBeInTheDocument();
  expect(getByLabelText(/Password:/i)).toBeInTheDocument();
  expect(getByText(/Submit/i)).toBeInTheDocument();
})


test('should update state on change event:', () => {
  const {getByLabelText} = render(<RegisterForm/>)

  fireEvent.change(getByLabelText(/User Name:/i), {
    target: {value: 'nvr'}
  })

  fireEvent.change(getByLabelText(/Email:/i), {
    target: {value: 'nvr@gmail.com'}
  })

  fireEvent.change(getByLabelText(/Password:/i), {
    target: {value: 'nvr123'}
  })

  expect(getByLabelText(/User Name:/i).value).toBe('nvr')
  expect(getByLabelText(/Email:/i).value).toBe('nvr@gmail.com')
  expect(getByLabelText(/Password:/i).value).toBe('nvr123')
})



test('should onSubmit', () => {
    const {getByLabelText, getByText} = render(<RegisterForm/>)
    fireEvent.change(getByLabelText(/User Name:/i), {
        target: {value: 'nvr'}
      })
    
      fireEvent.change(getByLabelText(/Email:/i), {
        target: {value: 'nvr@gmail.com'}
      })
    
      fireEvent.change(getByLabelText(/Password:/i), {
        target: {value: 'nvr123'}
      })

      fireEvent.change(getByText(/Submit/i) )

})


//gh