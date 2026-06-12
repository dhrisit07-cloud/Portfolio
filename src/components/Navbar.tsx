import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1uRU4UV40gReP-KM_hJ40tVajdSrl4M9Z/view?usp=sharing', external: true },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <Terminal className="nav-logo-icon" size={28} />
          <span>Dhrisit<span className="text-gradient">.dev</span></span>
        </a>

        <div className="nav-actions">
          <ul className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="nav-link" 
                  onClick={() => setIsMobileOpen(false)}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="nav-mobile-btn" onClick={toggleMobileMenu}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
