import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import Button from '../PrimaryButton/Button';

const NavBar = ({
  brand,
  links,
}) => {
  const navigate = useNavigate();
  return (
     <nav className="navbar">
  <div className="navbar-left">
    <div className="navbar-brand">
      {typeof brand === 'string' ? <span className="brand-text">{brand}</span> : brand}
    </div>
    <span className="navbar-separator">|</span>
    <ul className="navbar-links">
      {links.map((link, index) => (
        <li key={index} className="navbar-item">
          <button className="navbar-link" onClick={() => link.path && navigate(link.path)}>
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  </div>

  <div className="navbar-right">
    <Button buttonType='primary'>Sign In</Button>
    <Button buttonType='secondary'>Learn More</Button>
  </div>
</nav>
  );
};

NavBar.propTypes = {
  brand: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ).isRequired,
};

export default NavBar;


