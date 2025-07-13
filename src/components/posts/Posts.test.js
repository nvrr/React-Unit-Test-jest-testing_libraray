


//hg ''

import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Posts } from "./Posts";


const mockPostsData = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
]

const mockedNewPostsData = {
  "userId": 1,
  "id": 7,
  "title": "New Post title",
  "body": "New Post body"
}

describe('Posts:', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url, options) => {
      if(options?.method === 'POST' ){
        return Promise.resolve({
          json: () => Promise.resolve(mockedNewPostsData)
      })
      } else {
        return Promise.resolve({
          json: () => Promise.resolve(mockPostsData)
      })
      }
    })
  });

  test('should fetch and render Posts: ', async() => {
    // await act(async() => render(<Posts/>));
    // mockPostsData.forEach((post) => expect(screen.getByText(post.title)).toBeInTheDocument())
    //OR  -----> render(<Posts/>) //await waitFor(() => 

    render(<Posts/>);

    expect(window.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')

    await waitFor(() => 
    mockPostsData.forEach((post) => expect(screen.getByText(post.title)).toBeInTheDocument()))
    
  });


  test('should click on Cancel button hide form and reset input to default value:', async() => {
    render(<Posts/>)

    await waitFor(() => fireEvent.click(screen.getByText('Add New Post')));

    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Title'), {
        target: {value:'New Post Title' }
    })
    expect(screen.queryByPlaceholderText('Title').value).toBe('New Post Title')

    fireEvent.click(screen.getByText('Cancel'));

    expect(screen.queryByPlaceholderText('Title')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Add New Post'));
    expect(screen.queryByPlaceholderText('Title').value).toBe('')
  })
  
  

  test('should create and render a new post and submit a form:', async() => {
    render(<Posts/>)

    //open form
    await waitFor(() => fireEvent.click(screen.getByText('Add New Post')));

    const titleInputEl = screen.getByPlaceholderText('Title')
    const bodyTextareaEl = screen.getByPlaceholderText('Body')
    const submitBtnEl = screen.getByRole('button', {name: 'Submit'})

    expect(titleInputEl.value).toBe('');
    expect(bodyTextareaEl.value).toBe('');
    expect(submitBtnEl).toBeInTheDocument();

    //start typin
    // fireEvent.change(titleInputEl, {target: {value:'New Post title' }})
    // fireEvent.change(bodyTextareaEl, {target: {value:'New Post body' }})

    fireEvent.change(titleInputEl, {target: {value:mockedNewPostsData.title }})
    fireEvent.change(bodyTextareaEl, {target: {value:mockedNewPostsData.body }})

    //Submit form
    await waitFor(() => fireEvent.click(submitBtnEl))

    //form should be hidden
    await waitFor(() => {
      expect(titleInputEl).not.toBeInTheDocument()
      expect(bodyTextareaEl).not.toBeInTheDocument()
  
    })
    
    //Now post is displayed
    expect(screen.getByText(mockedNewPostsData.title)).toBeInTheDocument()
    expect(screen.getByText(mockedNewPostsData.body)).toBeInTheDocument()

  })
  
})


//hg ''