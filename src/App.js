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
import Card from './components/Card/Card.jsx';
import { FaDollarSign, FaUser } from "react-icons/fa";
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.jsx';

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
          navExtras={<ThemeSwitcher />}
          mobileFooter={<ThemeSwitcher />}
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
      }}>
         <h2>JazzieGrid Example</h2>
         <JazzieGrid columns={4} columnsTablet={2} columnsMobile={1} gap="var(--space-lg)" rowHeight="200px">
      {items.map((item, index) => (
        <Card key={index} className="grid-card">
          <h3>{item}</h3>
        </Card>
      ))}
    </JazzieGrid>

      </div>
      <div style={{ padding: "2rem" }} >
      <h2>Widget Example</h2>
      
<br />

  <JazzieCarousel visibleCount={2} size="xl"><DashboardWidget
  title="Revenue"
  value="$24,300"
  trend={{ direction: "up", percentage: 12.5 }}
  icon={<FaDollarSign />}
  variant="soft" // soft | elevated | dark
  footer={<button>View Details</button>}
/>
    <DashboardWidget
  title="Users"
  value="1,245"
  trend={{ direction: "down", percentage: 4.3 }}
  icon={<FaUser />}
  variant="elevated" />
  <DashboardWidget
  title="Users"
  value="1,245"
  trend={{ direction: "down", percentage: 4.3 }}
  icon={<FaUser />}
  variant="dark" />
  </JazzieCarousel>

  <ThemeSwitcher />

    </div>
            </>
          } />
          
          <Route path="/docs" element={<Docs />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/contact" element={<p style={{padding: '2rem', paddingTop: '80px'}}>Contact Page Coming Soon!</p>} />
        </Routes>

        <Footer
         links={{
          explore: [
            { label: "Docs", href: "/docs" },
            { label: "Components", href: "/components" },
          ],
          resources: [
            { label: "Contact", href: "https://glowhubportal.com/contact" },
          ],
        }}
        socialLinks={{
          instagram: "https://instagram.com/yourprofile",
          twitter: "https://twitter.com/yourprofile",
          github: "https://github.com/yourprofile",
        }}
        />
      </div>
    </Router>
  );
}

export default App;
