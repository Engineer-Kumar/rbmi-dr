import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      image: '/img/medicine.jpg',
      title: 'Medicine',
      description: 'Our Medicine Department specializes in providing personalized treatments for various health conditions.',
      link: '/services/medicine'
    },
    {
      image: '/img/surgery.jpg',
      title: 'Surgery',
      description: 'Our Surgery Department offers advanced surgical procedures with expert surgeons.',
      link: '/services/surgery'
    },
    {
      image: '/img/orthopedics.jpg',
      title: 'Orthopedics',
      description: 'Comprehensive care for bone and joint health, including surgeries and rehabilitation.',
      link: '/services/orthopedics'
    },
    {
      image: '/img/pediatrics.jpg',
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents with a focus on preventive health.',
      link: '/services/pediatrics'
    },
    // Add more services as needed
  ];

  return (
    <div>
      <style>{`
        .services-section {
          padding: 80px 20px; /* Increased padding for spacious feel */
          background-color: #f4f7fa; /* Light background for contrast */
        }

        .services-section h5 {
          font-size: 1.5rem; /* Font size for subheading */
          color: #007bff; /* Blue color for subheading */
          text-transform: uppercase; /* Uppercase for emphasis */
          border-bottom: 4px solid #007bff; /* Border below subheading */
          margin-bottom: 10px; /* Margin below subheading */
        }

        .services-section h1 {
          font-size: 2.5rem; /* Font size for main heading */
          margin-bottom: 40px; /* Margin below main heading */
          color: #333; /* Dark color for main heading */
          font-weight: 700; /* Bold font for emphasis */
        }

        .services-grid {
          display: grid; /* Grid layout for service cards */
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
          gap: 20px; /* Space between cards */
        }

        @media (max-width: 768px) {
          .services-section h1 {
            font-size: 2rem; /* Responsive font size for smaller screens */
          }

          .services-section h5 {
            font-size: 1.2rem; /* Responsive font size for smaller screens */
          }
        }
      `}</style>

      <div className="services-section" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h5>Services</h5>
            <h1>Excellent Medical Services</h1>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;