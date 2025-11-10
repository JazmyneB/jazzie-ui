import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';

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
    <div
      style={{
        width: "300px",
        padding: "16px",
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-soft)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Image Placeholder */}
      <Loader type="card" />

      {/* Title Placeholder */}
      <Loader type="text-lg" />

      {/* Text Line Placeholders */}
      <Loader type="text-md" />
      <Loader type="text-md" />
      <Loader type="text-sm" />
    </div>


      <Footer />
    </div>
  );
}

export default App;
