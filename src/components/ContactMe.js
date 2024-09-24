import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactMe.css';

function ContactMe() {
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setFormSubmitted(true); // Update state to show success message
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>If you have any questions or just want to get in touch, feel free to reach out!</p>
        <p>Email: jindaldeepam@gmail.com</p>
        <p>Phone: (437)-870-2429</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Input fields for user information */}
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {/* Conditional rendering for submission confirmation */}
      {formSubmitted && <p>Message sent successfully!</p>}
    </div>
  );
}

export default ContactMe;
