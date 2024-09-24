import React from 'react';
import './Services.css'; // Ensure this file is updated with the new CSS

function Services() {
  const services = [
    {
      icon: 'fa-code',
      title: 'Web Development',
      description: 'Creating responsive and dynamic websites.',
      price: '$500'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Developing user-friendly mobile applications.',
      price: '$700'
    },
    {
      icon: 'fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces.',
      price: '$400'
    },
    {
      icon: 'fa-cloud',
      title: 'Cloud Services',
      description: 'Providing scalable cloud solutions.',
      price: '$600'
    },
    {
      icon: 'fa-lock',
      title: 'Cybersecurity',
      description: 'Ensuring the safety of your digital assets.',
      price: '$800'
    },
    {
      icon: 'fa-database',
      title: 'Database Management',
      description: 'Managing and optimizing your databases.',
      price: '$550'
    }
  ];

  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <i className={`fas ${service.icon} service-icon`}></i>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <p className="service-price">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
