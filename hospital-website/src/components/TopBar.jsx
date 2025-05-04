import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Topbar = () => {
  return (
    <>
      <style>{`
        .topbar {
          background-color: #f7fafc; /* Light gray background */
          border-bottom: 1px solid #e2e8f0; /* Subtle border at the bottom */
          font-size: 0.875rem; /* Small font size */
        }

        .topbar .container {
          max-width: 1200px; /* Max width for the container */
          margin: 0 auto; /* Center the container */
          padding: 0 1rem; /* Horizontal padding */
        }

        .topbar .flex {
          display: flex; /* Flexbox for layout */
          justify-content: space-between; /* Space between items */
          align-items: center; /* Center items vertically */
          flex-wrap: wrap; /* Allow wrapping */
          padding: 0.5rem 0; /* Vertical padding */
        }

        .topbar .text-gray-600 {
          color: #4a5568; /* Dark gray text color */
        }

        .topbar .text-blue-600 {
          color: #3182ce; /* Blue color for links */
        }

        .topbar .text-green-600 {
          color: #38a169; /* Green color for Ayushman number */
        }

        .topbar a {
          text-decoration: none; /* Remove underline from links */
          transition: color 0.3s; /* Smooth color transition */
        }

        .topbar a:hover {
          color: #2b6cb0; /* Darker blue on hover */
        }

        .topbar img {
          height: 60px; /* Set height for the NABH logo */
          margin-left: 1.5rem; /* Space between logo and text */
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .topbar {
            display: none; /* Hide on smaller screens */
          }
        }
      `}</style>
      <div className="topbar hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap py-1">
            <div className="flex items-center text-gray-600">
              <span className="text-blue-600 mr-1 text-xs">📍</span>
              <p className="mb-0">
                RBMI Group campus, Bari Nagla, Near ITBP, Budaun Road, Bareilly
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <small className="block text-gray-600 "><b>Hospital Number</b></small>
                <a
                  href="tel:+919045954986"
                  className="text-black font-bold no-underline hover:text-blue-600"
                >
                  <FaPhone className="text-blue-600 mr-1 text-xs inline" />
                  +91 9045954986
                </a>
              </div>
              <div className="text-center">
                <small className="block text-gray-600"><b>Ayushman Number</b></small>
                <a
                  href="tel:+918475000844"
                  className="text-black font-bold no-underline hover:text-green-600"
                >
                  <FaPhone className="text-green-600 mr-1 text-xs inline" />
                  +91 8475000844
                </a>
              </div>
              <img src="./assets/images/img/NABH.jpeg" alt="NABH Accreditation Logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
