import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import SoftToggle from './components/SoftToggle/SoftToggle';

function App() {
  const [toggleOn, setToggleOn] = useState(false);
  const [bigToggle, setBigToggle] = useState(true);
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
      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', padding: '2rem' }}>
      
      <div>
        <h4>Default Toggle (md)</h4>
        <SoftToggle
          checked={toggleOn}
          onChange={() => setToggleOn(!toggleOn)}
        />
      </div>

      <div>
        <h4>Small Toggle (sm)</h4>
        <SoftToggle
          checked={toggleOn}
          onChange={() => setToggleOn(!toggleOn)}
          size="sm"
        />
      </div>

      <div>
        <h4>Large Toggle (lg)</h4>
        <SoftToggle
          checked={bigToggle}
          onChange={() => setBigToggle(!bigToggle)}
          size="lg"
        />
      </div>

      <div>
        <h4>Disabled Toggle</h4>
        <SoftToggle
          onChange={() => {}}
          disabled
        />
      </div>

    </div>

      <Footer />
    </div>
  );
}

export default App;
