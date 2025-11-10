import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Tabs from './components/Tabs/Tabs'

function App() {
  const tabs = [
    { label: "Overview", content: <p>This is the overview content.</p> },
    { label: "Details", content: <p>Details content goes here.</p> },
    { label: "Settings", content: <p>Settings content goes here.</p> },
  ];


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
        margin: '35px',
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-soft)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Tabs tabs={tabs} />

    </div>


      <Footer />
    </div>
  );
}

export default App;
