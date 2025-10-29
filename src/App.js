import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField/InputField.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div>
        <InputField
        label='text'
        type='text'
        value=''
        onChange={() => {}}
        placeholder='Enter text here'
        ></InputField></div>
      </header>
    </div>
  );
}

export default App;
