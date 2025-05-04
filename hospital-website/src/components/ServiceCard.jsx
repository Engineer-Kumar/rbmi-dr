import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div>
      <style>{`
        .service-card {
          background-color: #ffffff; /* White background for the card */
          border-radius: 10px; /* Rounded corners */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          overflow: hidden; /* Prevent overflow of child elements */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
        }

        .service-card:hover {
          transform: translateY(-5px); /* Lift effect on hover */
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
        }

        .service-card img {
          width: 100%; /* Full width for the image */
          height: 200px; /* Fixed height for the image */
          object-fit: cover; /* Cover the area without distortion */
        }

        .service-card .p-4 {
          padding: 20px; /* Padding inside the card */
        }

        .service-card h1 {
          font-size: 1.5rem; /* Font size for the title */
          font-weight: bold; /* Bold font for emphasis */
          margin-bottom: 10px; /* Margin below the title */
          color: #333; /* Dark color for the title */
        }

        .service-card p {
          color: #555; /* Gray color for the description */
          margin-bottom: 15px; /* Margin below the description */
          line-height: 1.5; /* Line height for better readability */
        }

        .service-card a {
          color: #007bff; /* Blue color for the link */
          text-decoration: none; /* Remove underline */
          font-weight: 600; /* Semi-bold font for the link */
          transition: color 0.3s ease; /* Smooth transition for hover effect */
        }

        .service-card a:hover {
          color: #0056b3; /* Darker blue on hover */
        }
      `}</style>

      <div className="service-card">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link to={link} className="text-blue-600 hover:text-blue-800">
            <i className="bi bi-arrow-right"></i> Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;