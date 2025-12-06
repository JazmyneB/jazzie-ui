import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Docs from './pages/DocsPage/DocsPage.jsx';
import ComponentsPage from './pages/ComponentsPage/ComponentsPage.jsx';
import JazzieGrid from './components/JazzieGrid/JazzieGrid.jsx';
import DashboardWidget from './components/DashboardWidget/DashboardWidget.jsx';
import JazzieCarousel from './components/Carousel/Carousel.jsx';
import { FaDollarSign, FaUser } from "react-icons/fa";

const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

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
