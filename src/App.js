import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/PrimaryButton/Button';

function App() {
  const [openModal, setOpenModal] = useState(false);
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
          <Button onClick={() => setOpenModal(!openModal)} buttonType='primary'>Open Modal</Button>
          <Modal isOpen={openModal} onClose={() => setOpenModal(!openModal)} title="Sample Modal" variant="dark">
            <p>This is a sample modal content.</p>
          </Modal>
        </div>
      </header>
    </div>
  );
}

export default App;
