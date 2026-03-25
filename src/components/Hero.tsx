import React from 'react';
import { ArrowRight, Download, Code2 } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello World, I'm</p>
          <h1 className="hero-title">Dhrisit Mazumder</h1>
          <h2 className="hero-subtitle">
            <span className="text-gradient">ML & Full-Stack Developer</span>
          </h2>
          <p className="hero-description">
            I build intelligent, privacy-first applications and full-stack solutions. 
            Passionate about bringing Data Science, Machine Learning, and seamless 
            web experiences together.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} className="ml-2" style={{ marginLeft: '8px' }} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Download size={18} className="mr-2" style={{ marginRight: '8px' }} /> Resume
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glow-circle"></div>
          <div className="glass-card visual-card">
            <Code2 size={48} className="visual-icon" />
            <div className="code-lines">
              <div className="code-line w-3/4"></div>
              <div className="code-line w-full"></div>
              <div className="code-line w-5/6"></div>
              <div className="code-line w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
