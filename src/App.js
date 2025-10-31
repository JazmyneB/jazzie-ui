import './App.css';
import NavBar from './components/NavBar/NavBar';
import RoboRose from './assets/RoboRose.png';

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

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to JazzieUI</h1>
          <p className="hero-subtitle">Soft Girl meets Boss Tech Energy 🌸</p>
          <button className="cta-button">Explore Components</button>
        </div>

        <div className="hero-image">
          <img src={RoboRose} alt="Robo Rose" />
        </div>
      </section>
    </div>
  );
}

export default App;




