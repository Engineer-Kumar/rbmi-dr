import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesPreview = () => {
  const services = [
    {
      title: 'Medicine',
      description: 'Personalized treatments for various health conditions...',
      image: '/images/medicine.jpg',
      link: '/services/medicine' // Add link for navigation
    },
    {
      title: 'Surgery',
      description: 'Advanced surgical procedures with expert surgeons...',
      image: '/images/surgery.jpg',
      link: '/services/surgery' // Add link for navigation
    },
    {
      title: 'Orthopedics',
      description: 'Comprehensive care for bone and joint health...',
      image: '/images/orthopedics.jpg',
      link: '/services/orthopedics' // Add link for navigation
    },
    {
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents...',
      image: '/images/pediatrics.jpg',
      link: '/services/pediatrics' // Add link for navigation
    },
  ];

  return (
    <div>
      <style>{`
        .services-preview {
          background-color: #f4f7fa; /* Light background for contrast */
          padding: 60px 20px; /* Padding for spacing */
          text-align: center; /* Centered text */
        }

        .services-preview h2 {
          font-size: 2.5rem; /* Font size for the heading */
          margin-bottom: 40px; /* Margin below the heading */
          color: #007bff; /* Blue color for the heading */
          font-weight: 700; /* Bold font for emphasis */
        }

        .services-grid {
          display: grid; /* Grid layout for service cards */
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
          gap: 20px; /* Space between cards */
        }

        @media (max-width: 768px) {
          .services-preview h2 {
            font-size: 2rem; /* Responsive font size for smaller screens */
          }
        }
      `}</style>

      <section className="services-preview">
        <div className="container mx-auto px-4">
          <h2>Excellent Medical Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                image={service.image} 
                title={service.title} 
                description={service.description} 
                link={service.link} // Pass the link to ServiceCard
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPreview;