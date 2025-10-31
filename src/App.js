import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

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
      <Hero />
    </div>
  );
}

export default App;

