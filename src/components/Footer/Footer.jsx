import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { supabase } from '../../utils/supabaseClient.js';
import Toast from '../Toasts/Toast';

const Footer = ({
  links = [],
  socialLinks = {},
  footerText = `© 2025 JazzieUI. Crafted with 🌸 and 💻`
}) => {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }]);

    if (error) {
      setToast({ show: true, message: "Oops! Something went wrong 😢", type: 'error' });
      console.error(error);
    } else {
      setToast({ show: true, message: "Subscribed successfully! ✨", type: 'success' });
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      {/* Floating shapes */}
      <div className="footer-floating-shapes">
        <div className="floating-shape shape-footer-1"></div>
        <div className="floating-shape shape-footer-2"></div>
      </div>

      {/* Top content */}
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-logo">
            <span role="img" aria-label="logo">🌸</span>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Explore</h3>
              {links.explore?.map((link, i) => (
                <a key={i} href={link.href}>{link.label}</a>
              ))}
            </div>
            <div className="footer-section">
              <h3>Resources</h3>
              {links.resources?.map((link, i) => (
                <a key={i} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <p>Stay inspired ✨ Subscribe to our newsletter</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>{footerText}</p>
          <p className="created-by">
            Created by <span>Jazmyne B.</span>
          </p>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-social">
            {socialLinks.instagram && <a href={socialLinks.instagram}><FaInstagram /></a>}
            {socialLinks.twitter && <a href={socialLinks.twitter}><FaTwitter /></a>}
            {socialLinks.github && <a href={socialLinks.github}><FaGithub /></a>}
          </div>
        </div>
      </div>

      {/* Toast notifications */}
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.shape({
    explore: PropTypes.array,
    resources: PropTypes.array,
  }),
  socialLinks: PropTypes.object,
  footerText: PropTypes.string,
};

export default Footer;
