import React from 'react';
import { GraduationCap } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text card-glass">
            <p className="mb-4">
              I am an aspiring Machine Learning and Full-Stack Developer curating a unique 
              academic path. By combining Software Engineering principles with advanced 
              Artificial Intelligence concepts, I build scalable systems that solve real-world problems.
            </p>
            <p>
              My expertise spans across both the backend architecture necessary to support 
              ML models and the frontend technologies required to deliver seamless, intuitive 
              user experiences.
            </p>
          </div>
          
          <div className="education-timeline">
            <h3 className="timeline-title">
              <GraduationCap className="inline-icon" size={24} /> Education (Dual Degree)
            </h3>
            
            <div className="timeline-item card-glass">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="flex-between">
                  <h4 className="institution">Gauhati University</h4>
                  <span className="duration">Aug 2024 - May 2028</span>
                </div>
                <p className="degree">B.Tech, Computer Science & Engineering</p>
                <p className="highlight">CGPA: 8.95 / 10.00</p>
                <p className="location text-sm">Jalukbari, Guwahati, Assam</p>
              </div>
            </div>
            
            <div className="timeline-item card-glass">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="flex-between">
                  <h4 className="institution">IIT Guwahati</h4>
                  <span className="duration">Aug 2024 - May 2028</span>
                </div>
                <p className="degree">BSc (Hons), Data Science & Artificial Intelligence</p>
                <div className="coursework">
                  <strong>Relevant Coursework:</strong> 
                  <p>Data Structures & Algorithms, Machine Learning, Artificial Intelligence, Probability & Statistics, Linear Algebra</p>
                </div>
                <p className="location text-sm">Guwahati, Assam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
