import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  const testimonials = [
    { 
      image: '/img/testimonial-1.jpg', 
      name: 'Patient Name', 
      profession: 'Profession', 
      quote: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.' 
    },
    {
      image: '/img/testimonial-2.jpg',
      name: 'John Doe',
      profession: 'Software Engineer',
      quote: 'The care I received was exceptional. The staff was attentive and the facilities were top-notch.'
    },
    {
      image: '/img/testimonial-3.jpg',
      name: 'Jane Smith',
      profession: 'Teacher',
      quote: 'I felt very comfortable during my treatment. Highly recommend this hospital to everyone!'
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <style>{`
        .testimonial-section {
          padding: 80px 20px; /* Increased padding for spacious feel */
          background-color: #f4f7fa; /* Light background for contrast */
        }

        .testimonial-section h5 {
          font-size: 1.5rem; /* Font size for subheading */
          color: #007bff; /* Blue color for subheading */
          text-transform: uppercase; /* Uppercase for emphasis */
          border-bottom: 4px solid #007bff; /* Border below subheading */
          margin-bottom: 10px; /* Margin below subheading */
        }

        .testimonial-section h1 {
          font-size: 2.5rem; /* Font size for main heading */
          margin-bottom: 40px; /* Margin below main heading */
          color: #333; /* Dark color for main heading */
          font-weight: 700; /* Bold font for emphasis */
        }

        .testimonial-grid {
          display: grid; /* Grid layout for testimonial cards */
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
          gap: 20px; /* Space between cards */
        }

        @media (max-width: 768px) {
          .testimonial-section h1 {
            font-size: 2rem; /* Responsive font size for smaller screens */
          }

          .testimonial-section h5 {
            font-size: 1.2rem; /* Responsive font size for smaller screens */
          }
        }
      `}</style>

      <div className="testimonial-section" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-md mx-auto">
            <h5>Testimonial</h5>
            <h1>Patients Say About Our Services</h1>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;