import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <style>{`
        .hero-header {
          background-color: #007bff; /* A professional blue color */
          color:rgb(22, 21, 21);
          padding: 80px 20px; /* Increased padding for a more spacious feel */
          text-align: center;
        }

        .hero-header h5 {
          font-size: 1.5rem;
          text-transform: uppercase;
          border-bottom: 4px solid rgba(255, 255, 255, 0.3);
          margin-bottom: 20px;
        }

        .hero-header h1 {
          font-size: 3.5rem; /* Larger font size for the main heading */
          margin-bottom: 30px;
          font-weight: 700; /* Bold font for emphasis */
        }

        .hero-header .container {
          max-width: 1200px; /* Limit the width for better readability */
          margin: 0 auto; /* Center the container */
        }

        .hero-header .space-x-4 {
          display: flex;
          justify-content: center; /* Center buttons */
          gap: 20px; /* Space between buttons */
        }

        .hero-header .btn {
          background-color: #ffffff; /* White background for buttons */
          color: #007bff; /* Blue text color */
          font-weight: 600; /* Semi-bold font */
          border-radius: 30px; /* Rounded buttons */
          padding: 15px 30px; /* Increased padding for buttons */
          text-decoration: none; /* Remove underline */
          transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
        }

        .hero-header .btn:hover {
          background-color: #e7f1ff; /* Light blue on hover */
          transform: translateY(-2px); /* Slight lift effect on hover */
        }

        @media (max-width: 768px) {
          .hero-header h1 {
            font-size: 2.5rem; /* Responsive font size for smaller screens */
          }

          .hero-header h5 {
            font-size: 1.2rem; /* Responsive font size for smaller screens */
          }
        }
      `}</style>

      <div className="bg-blue-600 py-20 mb-10 hero-header" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h5 className="inline-block">Welcome To DR Hospital</h5>
            <h1 className="text-5xl">Best Healthcare Solutions</h1>
            <div className="space-x-4">
              <Link to="/doctors" className="btn">
                Find Doctor
              </Link>
              <Link to="/appointment" className="btn">
                Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;