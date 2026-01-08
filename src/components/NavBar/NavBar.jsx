import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ brand, links }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
  <div className="navbar-brand">
    {typeof brand === 'string' ? <span className="brand-text">{brand}</span> : brand}
  </div>
   <span className="navbar-separator">|</span>

  <ul className="navbar-links">
    {links.map((link) => {
      const isActive = link.path && location.pathname === link.path;
      return (
        <li key={link.label} className="navbar-item">
        {link.href ? (
          <a 
            href={link.href}
            className={`navbar-link ${isActive ? 'active-link' : ''}`}
            target="_blank"
            rel="noopener noreferrer">
            {link.label}
          </a>
        ) : (
          <button
            type="button"
            className={`navbar-link ${isActive ? 'active-link' : ''}`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </button>
        )}
      </li>
    );
    })}
  </ul>
</div>

<div className="navbar-right">
  <button
    className={`hamburger ${menuOpen ? 'open' : ''}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
  >
    <span />
    <span />
    <span />
  </button>
</div>

<div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
 <ul>
  {links.map((link) => {
    const isActive = link.path && location.pathname === link.path;

    return (
      <li key={link.label}>
        {link.href ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={isActive ? 'active-link' : ''}
          >
            {link.label}
          </a>
        ) : (
          <button
            type="button"
            onClick={() => { navigate(link.path); setMenuOpen(false); }}
            className={isActive ? 'active-link' : ''}
          >
            {link.label}
          </button>
        )}
      </li>
    );
  })}
</ul>
</div>

    </nav>
  );
};

NavBar.propTypes = {
  brand: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
