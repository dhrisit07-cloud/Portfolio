import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Dhrisit<span className="text-gradient">.dev</span></h2>
            <p className="footer-tagline">
              Building intelligent solutions and full-stack experiences.
            </p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/dhrisit07-cloud" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/dhrisit-mazumder" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:dhrisit07@gmail.com" className="footer-link">
              <Mail size={20} />
            </a>
            <a href="tel:+918638740906" className="footer-link">
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dhrisit Mazumder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
