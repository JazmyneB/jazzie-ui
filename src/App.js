import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="app-container">
      <NavBar
        brand={"🌸 JazzieUI"}
        links={[
          { label: 'Home' },
          { label: 'Components' },
          { label: 'Docs' },
          { label: 'Contact' }
        ]}
        onLinkClick={(link) => console.log(`Clicked ${link.label}`)}
      />

      <div className="hero">
        <h1>Welcome to JazzieUI</h1>
        <p className="hero-subtitle">Soft Girl meet Boss Tech Energy 🌸</p>
        <button className="cta-button">Explore Components</button>
      </div>
    </div>
  );
}

export default App;



