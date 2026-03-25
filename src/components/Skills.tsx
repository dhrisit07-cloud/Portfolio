import React from 'react';
import { Cpu, Terminal, Database, BrainCircuit, Globe, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Terminal size={24} />,
    skills: ['Python', 'C', 'C++', 'Rust', 'Java']
  },
  {
    title: 'Frontend',
    icon: <Globe size={24} />,
    skills: ['HTML', 'CSS', 'React.js', 'Next.js', 'TypeScript']
  },
  {
    title: 'Backend',
    icon: <Cpu size={24} />,
    skills: ['Flask', 'FastAPI', 'Node.js', 'REST APIs']
  },
  {
    title: 'Databases',
    icon: <Database size={24} />,
    skills: ['SQLite', 'PostgreSQL']
  },
  {
    title: 'ML / AI',
    icon: <BrainCircuit size={24} />,
    skills: ['PyTorch', 'XGBoost', 'Scikit-learn', 'SHAP', 'MediaPipe', 'YOLOv8', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={24} />,
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
            <div key={index} className="skill-card card-glass">
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
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
