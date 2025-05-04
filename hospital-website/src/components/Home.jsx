import React, { useEffect } from 'react';
// import Herosection from './Herosection';
import AboutSection from './About';
import ServiceCard from './ServiceCard';
import ServicesPreview from './ServicePreview';

import Appointment from './Appointment';
import DoctorCard from '../DoctorCard';
import Testimonials from './Testimonials';
import BlogPreview from './BlogPreview';
import DoctorsPreview from './DoctorsPreview';

const Home = ({ appointmentForm, handleInputChange }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Light theme base styles */
      .home-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #fdfdfd;
        color: #333;
        line-height: 1.6;
        padding: 2rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      /* Section common style */
      .home-container section {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
        padding: 2rem;
        margin-bottom: 2rem;
        transition: box-shadow 0.3s ease;
      }

      .home-container section:hover {
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.15);
      }

      /* About Section */
      .about-section h3 {
        color: #065f46;
        font-weight: 700;
        margin-bottom: 0.5rem;
        font-size: 2rem;
        border-bottom: 1px solid #a7f3d0;
        padding-bottom: 0.5rem;
      }
      .about-section p {
        color: #4b5563;
        font-size: 1rem;
      }

      /* Services Preview */
      .services-preview h3 {
        color: #2563eb;
        font-weight: 700;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        border-bottom: 1px solid #bfdbfe;
        padding-bottom: 0.5rem;
      }
      .services-preview .service-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      /* Appointment Section */
      .appointment h2 {
        color: #7c3aed;
        font-weight: 700;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        border-bottom: 2px solid #ddd6fe;
        padding-bottom: 0.5rem;
      }
      .appointment form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 450px;
        margin-top: 1rem;
      }
      .appointment label {
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: #4b5563;
      }
      .appointment input,
      .appointment select,
      .appointment textarea {
        padding: 0.5rem;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
      }
      .appointment input:focus,
      .appointment select:focus,
      .appointment textarea:focus {
        border-color: #7c3aed;
        outline: none;
        box-shadow: 0 0 5px #7c3aed88;
      }
      .appointment button {
        background-color: #7c3aed;
        color: white;
        padding: 0.75rem;
        border: none;
        border-radius: 6px;
        font-size: 1.1rem;
        cursor: pointer;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
      }
      .appointment button:hover {
        background-color: #5b21b6;
      }

      /* Doctors Preview */
      .doctors-preview h2 {
        color: #059669;
        font-weight: 700;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        border-bottom: 2px solid #bbf7d0;
        padding-bottom: 0.5rem;
      }
      .doctors-preview .doctor-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
      }

      /* Testimonials */
      .testimonials h2 {
        color: #db2777;
        font-weight: 700;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        border-bottom: 2px solid #fbcfe8;
        padding-bottom: 0.5rem;
      }
      .testimonials .testimonial-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      /* Blog Preview */
      .blog-preview h2 {
        color: #ea580c;
        font-weight: 700;
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
        border-bottom: 2px solid #fed7aa;
        padding-bottom: 0.5rem;
      }
      .blog-preview .blog-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .services-preview .service-cards,
        .doctors-preview .doctor-cards,
        .blog-preview .blog-cards {
          flex-direction: column;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="home-container">
      <section className="about-section">
        <AboutSection />
      </section>

      <section className="services-preview">
        <ServicesPreview />
      </section>

      <section className="appointment">
        <Appointment 
          appointmentForm={appointmentForm} 
          handleInputChange={handleInputChange} 
        />
      </section>

      <section className="doctors-preview">
        <DoctorsPreview />
      </section>

      <section className="testimonials">
        <Testimonials />
      </section>

      <section className="blog-preview">
        <BlogPreview />
      </section>
    </div>
  );
};

export default Home;
