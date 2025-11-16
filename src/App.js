import React, {useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Docs from './pages/DocsPage/DocsPage';
import ComponentsPage from './pages/ComponentsPage/ComponentsPage';
import JazzieGrid from './components/JazzieGrid/JazzieGrid';
import DashboardWidget from './components/DashboardWidget/DashboardWidget';
import { FaDollarSign, FaUser } from "react-icons/fa";

const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);
const columns = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "City", accessor: "city" },
];

const data = [
  { name: "Alice", age: 25, city: "Roseville" },
  { name: "Bea", age: 30, city: "Cotton Candy" },
  { name: "Cleo", age: 22, city: "Lavender Dream" },
  { name: "Daisy", age: 28, city: "Milk Tea" },
  { name: "Ella", age: 26, city: "Pastel Mint" },
  { name: "Faye", age: 29, city: "Jaded" },
];

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
         <h2>JazzieGrid Example</h2>
      <JazzieGrid columns={4} gap="1.5rem" rowHeight="150px">
        {items.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </JazzieGrid>
      </div>
      <div style={{ padding: "2rem" }} >
      <h2>Widget Example</h2>
      <DashboardWidget
  title="Revenue"
  value="$24,300"
  trend={{ direction: "up", percentage: 12.5 }}
  icon={<FaDollarSign />}
  variant="soft" // soft | elevated | dark
  footer={<button>View Details</button>}
/>
<br />
  <DashboardWidget
  title="Users"
  value="1,245"
  trend={{ direction: "down", percentage: 4.3 }}
  icon={<FaUser />}
  variant="elevated" />
  <br/>
  <DashboardWidget
  title="Users"
  value="1,245"
  trend={{ direction: "down", percentage: 4.3 }}
  icon={<FaUser />}
  variant="dark" />

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
