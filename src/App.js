import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Avatar from './components/Avatar/Avatar'

function App() {
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
      <div style = {{ marginTop: '5rem', marginBottom: '5rem'}}>
        <Avatar
  size="lg"
  initials="JS"
  status="online"
  badgeCount={3}
  variant="gradient"
/>
<br />

<Avatar
  size="lg"
  src="https://i.pravatar.cc/100"
  status="online"
  badgeCount={2}
  variant="glass"
/>
<Avatar
  size="md"
  src="https://i.pravatar.cc/100"
  status="offline"
  badgeCount={0}
  variant="bordered"
/>
<Avatar
  size="sm"
  src="https://i.pravatar.cc/100"
  status="away"
  badgeCount={5}
  variant="gradient"
/>

      </div>

      <Footer />
    </div>
  );
}

export default App;
