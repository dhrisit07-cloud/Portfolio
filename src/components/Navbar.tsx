import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <Terminal className="nav-logo-icon" size={28} />
          <span>Dhrisit<span className="text-gradient">.dev</span></span>
        </a>

        <ul className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link" onClick={() => setIsMobileOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-mobile-btn" onClick={toggleMobileMenu}>
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
