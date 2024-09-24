import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For React Router v6
import './ContactMe.css'; // Ensure this file is updated with the new CSS

function ContactMe() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate(); // For navigation after form submission

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // You can optionally add code to handle form submission, such as sending the form data

    // Set the form submission state to true
    setFormSubmitted(true);

    // Redirect to the home page after submission
    navigate('/'); // Replace '/' with the correct home route if necessary
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
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      {formSubmitted && <p>Message sent successfully!</p>}
    </div>
  );
}

export default ContactMe;
