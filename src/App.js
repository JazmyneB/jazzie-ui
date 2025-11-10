import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import SoftToggle from './components/SoftToggle/SoftToggle';

function App() {
  const [on, setOn] = useState(false);

  const handleToggle = (e) => {
    setOn(e.target.checked);
  };
  return (
    <div className="app-container">
      <NavBar
        brand="🌸 JazzieUI"
        links={[
          { label: 'Home' },
          { label: 'Components' },
          { label: 'Docs' },
          { label: 'Contact' }
        ]}
        onLinkClick={(link) => console.log(`Clicked ${link.label}`)}
      />

      <Hero />
       <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'var(--color-bg)',
    }}>
      <p>Default(MD) Rose</p>
      <SoftToggle checked={on} onChange={handleToggle} variant="rose" size='md'/>
      <p>LG Blush</p>
      <SoftToggle checked={on} onChange={handleToggle} variant="blush" size="lg" />
      <p>SM Accent</p>
      <SoftToggle checked={on} onChange={handleToggle} variant="accent" size="sm" />
      <p>Neo</p>
      <SoftToggle checked={on} onChange={handleToggle} variant="neo" />
    </div>

      <Footer />
    </div>
  );
}

export default App;
