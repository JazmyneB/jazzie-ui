// components/Footer/Footer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = ({ 
    links = [
      { label: 'Home', href: '#home' },
      { label: 'Components', href: '#components' },
      { label: 'Docs', href: '#docs' },
      { label: 'Contact', href: '#contact' },
      { label: 'Terms & Conditions', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' }
    ],
    socialLinks = {
      instagram: '#',
      twitter: '#',
      github: '#'
    },
    footerText = `© 2025 JazzieUI. Crafted with 🌸 and 💻` }) => {
  return (
    <footer className="footer">
      {/* Floating soft gradient shapes */}
      <div className="footer-floating-shapes">
        <div className="floating-shape shape-footer-1"></div>
        <div className="floating-shape shape-footer-2"></div>
      </div>

      {/* Top content */}
      <div className="footer-top">
        {/* Left: Logo + Links */}
        <div className="footer-left">
          <div className="footer-logo">
            <span role="img" aria-label="logo">🌸</span>
          </div>
          <div className="footer-links">
            <div className="footer-section">
  <h3>Explore</h3>
  {links.slice(0,4).map((link, index) => (
    <a key={index} href={link.href}>{link.label}</a>
  ))}
</div>
<div className="footer-section">
  <h3>Resources</h3>
  {links.slice(4).map((link, index) => (
    <a key={index} href={link.href}>{link.label}</a>
  ))}
</div>

          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="footer-newsletter">
          <p>Stay inspired ✨ Subscribe to our newsletter</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom row */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>{footerText}</p>
          <p className="created-by">
            Created by <span>Jazmyne B.</span>
          </p>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-social">
  {socialLinks.instagram && (
    <a href={socialLinks.instagram} aria-label="Instagram">
      <FaInstagram />
    </a>
  )}
  {socialLinks.twitter && (
    <a href={socialLinks.twitter} aria-label="Twitter">
      <FaTwitter />
    </a>
  )}
  {socialLinks.github && (
    <a href={socialLinks.github} aria-label="GitHub">
      <FaGithub />
    </a>
  )}
</div>


        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footerText: PropTypes.string,
};

export default Footer;
