import './App.css';
import RoboRose from './assets/RoboRose.png';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="app-container">
      <NavBar
        brand="JazzieUI"
        links={[
          { label: 'Home', href: '#' },
          { label: 'Components', href: '#components' },
          { label: 'Docs', href: '#docs' },
          { label: 'GitHub', href: '#github' },
        ]}
      />
      <section className="hero">
        <div className="background-layer">
          <div className="parallax-shape shape1" />
          <div className="parallax-shape shape2" />
          <div className="parallax-shape shape3" />
        </div>

        <div className="hero-content">
          <h1 className="dynamic-text">Welcome to JazzieUI</h1>
          <p className="hero-subtitle">
            Where Soft Girl Energy meets Boss Tech Vibes in Perfect Harmony
          </p>
          <button className="cta-button">Explore the Future</button>
        </div>

        <div className="robo-rose-container">
          <img src={RoboRose} alt="Robo Rose" className="robo-rose" />
          <div className="holo-glass-panel" />
        </div>
      </section>
    </div>
  );
}

export default App;
