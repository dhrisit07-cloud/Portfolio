import React from 'react';
import { ExternalLink, Activity, Focus, Map } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "Cardiac Risk Predictor",
    tech: ["XGBoost", "SHAP", "Scikit-learn", "Streamlit"],
    description: "Trained and benchmarked 5 ML models on 918 patients; selected XGBoost achieving 86.41% accuracy and AUC 0.9164. Integrated SHAP TreeExplainer for per-patient explainability; deployed as a live Streamlit dashboard.",
    link: "https://cardiac-risk.streamlit.app",
    icon: <Activity size={32} />
  },
  {
    title: "Focus Guardian",
    tech: ["FastAPI", "Next.js", "MediaPipe", "YOLOv8", "OpenCV"],
    description: "Built a privacy-first, real-time focus tracker with 100% local inference using 3D head pose estimation (MediaPipe) and EAR-based drowsiness detection. Full-stack system processing frames at ~10 FPS.",
    link: "#",
    icon: <Focus size={32} />
  },
  {
    title: "SANGAI",
    tech: ["Next.js", "TypeScript", "React", "FastAPI"],
    description: "Designed a full-stack cultural tourism discovery platform for Northeast India with a 3D interactive map (region → state → district drill-down) and multi-feature discovery system for places, festivals, and homestays.",
    link: "#",
    icon: <Map size={32} />
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card-glass">
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} className="mr-2" style={{ marginRight: '6px' }} /> Live Demo
                  </a>
                )}
                <a href="#" className="project-link">
                  <FaGithub size={18} className="mr-2" style={{ marginRight: '6px' }} /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
