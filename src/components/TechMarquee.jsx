import React from 'react';
import './TechMarquee.css';

const techSkills = [
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'HTML5 & CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
];

const TechMarquee = () => {
  // Duplicated array to ensure 100% seamless infinite looping
  const row1 = [...techSkills, ...techSkills, ...techSkills];
  const row2 = [...techSkills].reverse().concat([...techSkills].reverse(), [...techSkills].reverse());

  return (
    <div className="tech-marquee-section">
      <h3 className="tech-marquee-title">Technical Expertise & Tech Stack</h3>

      {/* Row 1: Smooth Nonstop Left-to-Right Scrolling */}
      <div className="marquee-container">
        <div className="marquee-track scroll-left-to-right">
          {row1.map((item, index) => (
            <div key={`r1-${index}`} className="tech-card-pill">
              <img src={item.icon} alt={item.name} className="tech-card-icon" loading="lazy" />
              <span className="tech-card-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Smooth Nonstop Right-to-Left Scrolling */}
      <div className="marquee-container margin-top">
        <div className="marquee-track scroll-right-to-left">
          {row2.map((item, index) => (
            <div key={`r2-${index}`} className="tech-card-pill">
              <img src={item.icon} alt={item.name} className="tech-card-icon" loading="lazy" />
              <span className="tech-card-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
