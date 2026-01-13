import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({
  brand,
  links,
  navExtras,
  mobileFooter
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  setMenuOpen(false);
}, [location.pathname]);
  useEffect(() => {
  document.body.classList.toggle('menu-open', menuOpen);
}, [menuOpen]);


  return (
    <nav className="navbar">
      <div className="navbar-left">
  <div className="navbar-brand desktop-only">
    {typeof brand === 'string' ? <span className="brand-text">{brand}</span> : brand}
  </div>
   <span className="navbar-separator">|</span>

  <ul className="navbar-links">
    {links.map((link) => {
      const isActive = link.path && location.pathname === link.path;
      return (
        <li key={link.label} className="navbar-item">
        {link.href ? (
          <Link
            to={link.href}
            className={`navbar-link ${isActive ? 'active-link' : ''}`}
            target="_blank"
            rel="noopener noreferrer">
            {link.label}
          </Link>
        ) :  (
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
  {navExtras && (
    <>
    <hr className="mobile-menu-divider" style={{ marginBotton: '10px' }} />
    <li className="navbar-item navbar-extra">
      {navExtras}
      </li>
    </>
  )}
  </ul>
</div>

<div className="navbar-right">
  {/* {rightContent && (
    <div className="navbar-right-content">
      {rightContent}
    </div>
  )} */}
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
  <div className="mobile-menu-header">
  <div className="mobile-menu-header-row">
    <div className="mobile-menu-brand">
      {typeof brand === 'string' ? (
        <span className="brand-text">{brand}</span>
      ) : (
        brand
      )}
    </div>

    <button
      className="mobile-menu-close"
      aria-label="Close menu"
      onClick={() => setMenuOpen(false)}
    >
      ✕
    </button>
  </div>

  <hr className="mobile-menu-divider" />
</div>

 <ul>
  {links.map((link) => {
    const isActive = link.path && location.pathname === link.path;

    return (
      <li key={link.label}>
        {link.href ? (
          <Link
            to={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={isActive ? 'active-link' : ''}
          >{link.label}</Link>
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
  <hr className="mobile-menu-divider" style={{ marginBotton: '10px'}} />
  {mobileFooter && (
  <div className="mobile-menu-footer">
    {mobileFooter}
  </div>
)}

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
  navExtras: PropTypes.node,
  mobileFooter: PropTypes.node,
};

export default NavBar;
