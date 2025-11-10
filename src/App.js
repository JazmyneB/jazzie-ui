import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Tabs from './components/Tabs/Tabs';
import Docs from './pages/Docs';
import ComponentsPage from './pages/ComponentsPage/ComponentsPage';

function App() {
  const tabs = [
    { label: "Overview", content: <p>This is the overview content.</p> },
    { label: "Details", content: <p>Details content goes here.</p> },
    { label: "Settings", content: <p>Settings content goes here.</p> },
  ];

  return (
    <Router>
      <div className="app-container">
        <NavBar
          brand="🌸 JazzieUI"
          links={[
            { label: 'Home', path: '/' },
            { label: 'Components', path: '/components' },
            { label: 'Docs', path: '/docs' },
            { label: 'Contact', path: '/contact' }
          ]}
        />

        <Routes>
          <Route path="/" element={<><Hero /><div
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
          </div></>} />
          
          <Route path="/docs" element={<Docs />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/contact" element={<p style={{padding: '2rem', paddingTop: '80px'}}>Contact Page Coming Soon!</p>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
