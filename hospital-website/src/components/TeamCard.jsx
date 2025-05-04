import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const TeamCard = ({ image, name, specialization, link }) => {
  return (
    <div>
      <style>{`
        .team-item {
          background-color: #f9f9f9; /* Light gray background for the card */
          border-radius: 10px; /* Rounded corners */
          overflow: hidden; /* Prevent overflow of child elements */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
        }

        .team-item:hover {
          transform: translateY(-5px); /* Lift effect on hover */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
        }

        .team-item img {
          width: 100%; /* Full width for the image */
          height: 200px; /* Fixed height for the image */
          object-fit: cover; /* Cover the area without distortion */
        }

        .team-item h3 {
          font-size: 1.5rem; /* Font size for the name */
          font-weight: bold; /* Bold font for emphasis */
          margin-bottom: 5px; /* Margin below the name */
          color: #333; /* Dark color for the name */
        }

        .team-item h6 {
          font-size: 1rem; /* Font size for specialization */
          color: #007bff; /* Blue color for specialization */
          margin-bottom: 10px; /* Margin below specialization */
        }

        .team-item p {
          color: #555; /* Gray color for the description */
          margin: 0; /* Remove margin */
          line-height: 1.5; /* Line height for better readability */
        }

        .social-icons {
          display: flex; /* Flexbox for social icons */
          border-top: 1px solid #e0e0e0; /* Top border for separation */
          padding: 10px; /* Padding for social icons */
        }

        .social-icons a {
          background-color: #007bff; /* Blue background for icons */
          color: #ffffff; /* White color for icons */
          border-radius: 50%; /* Circular icons */
          padding: 10px; /* Padding for icons */
          margin-right: 10px; /* Space between icons */
          transition: background-color 0.3s ease; /* Smooth transition for hover effect */
        }

        .social-icons a:hover {
          background-color: #0056b3; /* Darker blue on hover */
        }
      `}</style>

      <div className="team-item">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-5/12">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="w-full sm:w-7/12 flex flex-col">
            <div className="p-4 flex-grow">
              <a href={link} className="hover:text-blue-600">
                <h3 className="text-xl font-bold">{name}</h3>
              </a>
              <h6 className="text-blue-600 italic mb-4">{specialization}</h6>
              <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
            </div>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;