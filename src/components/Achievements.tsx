import React from 'react';
import { Trophy, Star } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    icon: <Trophy size={40} className="achievement-icon" />,
    title: "1st Place - HACK-To-HIRE Ideathon",
    event: "Gauhati University",
    description: "Secured first place at the university-level Ideathon (Startup Exhibition, Incubation & 24-Hour Hackathon) for an innovative tech solution recognised for its real-world feasibility."
  },
  {
    icon: <Star size={40} className="achievement-icon" />,
    title: "Top 6 Finalist",
    event: "GUenARK SIH 1.0 Hackathon (Feb 2026)",
    description: "Awarded Certificate of Achievement for a pioneer approach to problem-solving and seamless execution of a high-complexity technical prototype, recognised by the Vice Chancellor."
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section bg-alt-light">
      <div className="container">
        <h2 className="section-title">
          Awards & <span className="text-gradient">Achievements</span>
        </h2>
        
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card card-glass">
              <div className="achievement-icon-wrapper">
                {item.icon}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{item.title}</h3>
                <h4 className="achievement-event">{item.event}</h4>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
