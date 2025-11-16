import React, {useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Docs from './pages/DocsPage/DocsPage';
import ComponentsPage from './pages/ComponentsPage/ComponentsPage';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [page, setPage] = useState(1);
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
        marginTop: "4rem",
        marginBottom: "4rem",
        display: "flex",
        justifyContent: "center" 
      }}>
        <Pagination
        currentPage = {page}
        totalPages={20}
        onPageChange={(p)=> setPage(p)}
        siblingCount={1}
        />
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
