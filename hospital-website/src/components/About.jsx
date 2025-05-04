import React from 'react';
import { FaUser, FaProcedures, FaMicroscope, FaAmbulance } from 'react-icons/fa';

const About = () => {
  const features = [
    { icon: <FaUser className="text-3xl mb-3 text-blue-900" />, title: 'Qualified', subtitle: 'Doctors' },
    { icon: <FaProcedures className="text-3xl mb-3 text-blue-900" />, title: 'Emergency', subtitle: 'Services' },
    { icon: <FaMicroscope className="text-3xl mb-3 text-blue-900" />, title: 'Accurate', subtitle: 'Testing' },
    { icon: <FaAmbulance className="text-3xl mb-3 text-blue-900" />, title: 'Free', subtitle: 'Ambulance' },
  ];

  return (
    <>
      <style>{`
        .about-container {
          padding: 5rem 0;
        }
        .about-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        .about-title {
          color: #3b82f6;
          text-transform: uppercase;
          border-bottom: 4px solid #3b82f6;
          margin-bottom: 1rem;
          font-weight: 700;
          font-size: 1rem;
          display: inline-block;
        }
        .about-heading {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: #111827;
        }
        .about-description {
          margin-bottom: 1.5rem;
          color: #4b5563;
          line-height: 1.6;
          font-size: 1rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }
        @media(min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .feature-card {
          text-align: center;
          background-color: #f7fafc;
          border-radius: 9999px;
          padding: 1rem;
          box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
          transition: box-shadow 0.3s ease;
        }
        .feature-card:hover {
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.15);
        }
        .feature-title {
          margin: 0;
          font-weight: 600;
          font-size: 1.1rem;
          color: #1e3a8a;
        }
        .feature-subtitle {
          display: block;
          color: #3b82f6;
          font-weight: 500;
          font-size: 0.9rem;
        }
      `}</style>
      <div className="about-container" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
              <img src="" alt="About" className="about-image" />
            </div>
            <div className="w-full lg:w-7/12 px-4">
              <h5 className="about-title">About Us</h5>
              <h1 className="about-heading">Best Medical Care For Yourself and Your Family</h1>
              <p className="about-description">
                DR Hospital is a multi-speciality hospital with digital X Ray, Ultrasound and Pathology lab facility. 
                The hospital has well equipped OPD with Surgeon, Orthopractic, Gynaecologist & General physician. 
                It has a fully running Dental clinic too. DR Hospital is also accredited by the Ayushman Bharat Pradhan 
                Mantri Jan Arogya Yojana to meet the needs of its populations.
                <br /><br />
                DR Hospital is proud of its swing bed (extended recovery and rehabilitation) program which allows us to 
                serve many orthopaedic and medical patients requiring longer recovery and rehab services.
              </p>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    {feature.icon}
                    <h6 className="feature-title">
                      {feature.title}
                      <small className="feature-subtitle">{feature.subtitle}</small>
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;