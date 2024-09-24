import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-left">
        <h1>So, who am I?</h1>
        <p className="about-description">
          I am Deepam Jindal, a software engineering student passionate about technology and innovation. 
          With a strong foundation in programming and a keen interest in developing practical solutions, 
          I strive to make a positive impact through my work. I am eager to contribute to projects that 
          drive technological advancements and solve real-world problems.
        </p>
        {/* Link to download resume */}
        <a href="/resume.pdf" download className="btn resume-btn">Download My Resume</a>
      </div>

      <div className="about-me-right">
        {/* Profile image with alt text for accessibility */}
        <img src="/profile-image.jpg" alt="Deepam Jindal" className="profile-image" />
      </div>
    </div>
  );
}

export default AboutMe;
