import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import { RegisterForm } from './components/registerForm/registerForm';
import { Posts } from './components/posts/Posts';

function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
<Posts/>
      {/* <RegisterForm/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
