import React from 'react';
import { Cpu, Terminal, Database, BrainCircuit, Globe, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Terminal size={24} />,
    description: 'Core programming languages used across application and ML workflows.',
    skills: ['Python', 'C', 'C++', 'Rust', 'Java']
  },
  {
    title: 'Frontend',
    icon: <Globe size={24} />,
    description: 'Tools and frameworks for building modern, responsive user interfaces.',
    skills: ['HTML', 'CSS', 'React.js', 'Next.js', 'TypeScript']
  },
  {
    title: 'Backend',
    icon: <Cpu size={24} />,
    description: 'Server-side frameworks and APIs powering robust application logic.',
    skills: ['Flask', 'FastAPI', 'Node.js', 'REST APIs']
  },
  {
    title: 'Databases',
    icon: <Database size={24} />,
    description: 'Relational databases for structured data storage and management.',
    skills: ['SQLite', 'PostgreSQL']
  },
  {
    title: 'ML / AI',
    icon: <BrainCircuit size={24} />,
    description: 'Machine learning and computer vision libraries for intelligent systems.',
    skills: ['PyTorch', 'XGBoost', 'Scikit-learn', 'SHAP', 'MediaPipe', 'YOLOv8', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={24} />,
    description: 'Development tools and platforms that streamline the engineering workflow.',
    skills: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'Streamlit', 'OpenCV', 'Docker']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <p className="skill-description">{category.description}</p>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
