import { fireEvent, render, screen } from "@testing-library/react"
import { AddNewPostBtn } from "./AddNewPostBtn"

//hg ''
describe('AddNewPostBtn: ', () => {
  test('button onclick should trigger onClick callback: ', () => {
    const onClickCallback = jest.fn()
    render(<AddNewPostBtn onClick={onClickCallback} />);

    fireEvent.click(screen.getByText('Add New Post'));
    expect(onClickCallback).toHaveBeenCalled()
  })
  
})
