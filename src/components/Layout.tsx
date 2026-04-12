import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="nav-header">
      <div className="nav-content">
        <NavLink to="/" className="nav-logo">OpenUSDZ</NavLink>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Gallery</NavLink>
          <NavLink to="/lab" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Lab</NavLink>
        </nav>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Platform</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/lab">Lab (Prototyping)</NavLink></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">USDZ Documentation</a></li>
            <li><a href="#">Spatial Web Guide</a></li>
            <li><a href="#">VisionOS Assets</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@openusdz.com">Email Us</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © 2024 OpenUSDZ. All rights reserved.
        </div>
        <div className="footer-badge">
          <span>Optimized for</span>
          <span style={{ color: 'var(--apple-text)', fontWeight: 600 }}>Apple Vision Pro 🥽</span>
        </div>
      </div>
    </footer>
  );
};
