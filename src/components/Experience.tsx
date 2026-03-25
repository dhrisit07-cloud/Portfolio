import React from 'react';
import { Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "Co-Lead, AI/ML",
    company: "Google Developer Groups on Campus, Gauhati University",
    duration: "Nov 2024 – Present",
    description: "Leading the AI/ML vertical of GDG on Campus — organising workshops, project sprints, and technical events while mentoring junior members and collaborating with fellow leads on cross-team initiatives."
  },
  {
    role: "Independent ML & Full-Stack Developer",
    company: "Freelance",
    duration: "2024 – Present",
    description: "End-to-end ML experience: data preprocessing, model training, hyperparameter tuning, and deployment via Streamlit and FastAPI; full-stack experience building REST API backends and React/Next.js frontends with third-party API integrations."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">
          Experience & <span className="text-gradient">Leadership</span>
        </h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-card card-glass">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>
                <div className="exp-date">
                  <Calendar size={16} className="mr-2" style={{ marginRight: '6px' }} />
                  {exp.duration}
                </div>
              </div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
