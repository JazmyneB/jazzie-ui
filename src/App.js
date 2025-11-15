import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Docs from './pages/DocsPage/DocsPage';
import ComponentsPage from './pages/ComponentsPage/ComponentsPage';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {
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
          <Route 
          path="/" 
          element=
          {
            <>
            <Hero />
            <div style={{ 
        marginTop: "2rem", 
        display: "flex",
        justifyContent: "center" 
      }}>
        <ThemeSwitcher />
      </div>
            </>
          } />
          
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
