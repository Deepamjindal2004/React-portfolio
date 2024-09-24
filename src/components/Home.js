import React, { useEffect, useState } from 'react';
import './Home.css'; // Ensure this file is updated with the new CSS

function Home() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    // Set a timer for when typing animation should end
    const timer = setTimeout(() => {
      setTypingDone(true);
    }, 2000); // Total duration to match the typing effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h2 className="welcome-message">Welcome to My Portfolio!</h2>
        <h1 className={`typing-animation ${typingDone ? 'typing-done' : ''}`}>
          Hi, I am Deepam!
        </h1>
        <p className="hero-description">
          A passionate software engineer who loves creating meaningful solutions through code.
        </p>
        <a href="/contactMe" className="btn contact-btn">Contact Me</a>
      </div>
      
      <div className="preview-section">
        <div className="intro">
          <h2>What I Do</h2>
          <ul>
            <li>Development</li>
            <li>Design</li>
            <li>Analysis</li>
            <li>Optimization</li>
          </ul>
        </div>
        <div className="preview-images">
          <img src="/Project_A.jpeg" alt="Sample Project" className="preview-image left" />
          <img src="/Project_B.jpeg" alt="Another Project" className="preview-image right" />
        </div>
      </div>
      
      <div className="social-media-links">
        {/* Font Awesome icons for social media */}
        <a href="https://github.com/Deepamjindal2004" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/deepam-jindal-8490b2248/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/deepam_jindal/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Deepam Jindal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
