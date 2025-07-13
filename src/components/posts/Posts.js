import { useEffect, useState } from "react";
import { AddNewPostBtn } from "./AddNewPostBtn";

export function Posts() {
  const newPostDefaultValues = {
    title:'',
    body:''
  };
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState(newPostDefaultValues)
  const [postFormIsVisible, setPostFormIsVisisble] = useState(false)

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then((res) => res.json())
     .then((data) => {setPosts(data)
    
    })
     .catch((err) => console.log(err))
  },[])

  console.log('posts:::',posts);
  //hg

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then((res) => res.json())
    .then((data) => {
      setPosts([...posts, data])
      setPostFormIsVisisble(false)
    setNewPost(newPostDefaultValues)
    })
    .catch((er) => console.log(er))
  }

  const handleCancel = () => {
    setPostFormIsVisisble(false)
    setNewPost(newPostDefaultValues)
  }

  return (
    <div>
      {!postFormIsVisible && (
        <AddNewPostBtn onClick={() => setPostFormIsVisisble(true)} />
        // <button onClick={() => setPostFormIsVisisble(true)}>
        //   Add New Post
        // </button>
      )}

      {postFormIsVisible && (
        <form onSubmit={handleSubmit}>
          <h1>New Post</h1>
          <input type="text" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} placeholder="Title" />
          <br/>

          <textarea value={newPost.body} onChange={e => setNewPost({...newPost, body: e.target.value})} placeholder="Body" ></textarea>

          <br/>

          <button type="sumbit">Submit</button>

          <button type="cancel" onClick={handleCancel}>Cancel</button>
        </form>
      )}
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}