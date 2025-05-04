import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ image, name, profession, quote }) => {
  return (
    <div>
      <style>{`
        .testimonial-card {
          background-color: #ffffff; /* White background for the card */
          border-radius: 10px; /* Rounded corners */
          padding: 20px; /* Padding inside the card */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
        }

        .testimonial-card:hover {
          transform: translateY(-5px); /* Lift effect on hover */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
        }

        .testimonial-card img {
          width: 96px; /* Fixed width for the image */
          height: 96px; /* Fixed height for the image */
          border-radius: 50%; /* Circular image */
          margin: 0 auto; /* Center the image */
        }

        .quote-icon {
          position: absolute; /* Positioning for the quote icon */
          top: 100%; /* Position below the image */
          left: 50%; /* Center horizontally */
          transform: translate(-50%, -50%); /* Center the icon */
          background-color: #ffffff; /* White background for the icon */
          border-radius: 50%; /* Circular background */
          width: 64px; /* Fixed width for the icon background */
          height: 64px; /* Fixed height for the icon background */
          display: flex; /* Flexbox for centering the icon */
          align-items: center; /* Center vertically */
          justify-content: center; /* Center horizontally */
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        }

        .quote-icon:hover {
          background-color: #f0f0f0; /* Light gray on hover */
        }

        .testimonial-card p {
          font-size: 1.125rem; /* Font size for the quote */
          font-style: italic; /* Italic style for the quote */
          margin: 15px 0; /* Margin above and below the quote */
          color: #555; /* Gray color for the quote */
        }

        .testimonial-card h3 {
          font-size: 1.25rem; /* Font size for the name */
          font-weight: bold; /* Bold font for emphasis */
          margin: 5px 0; /* Margin above and below the name */
          color: #333; /* Dark color for the name */
        }

        .testimonial-card h6 {
          font-size: 1rem; /* Font size for the profession */
          color: #007bff; /* Blue color for the profession */
        }
      `}</style>

      <div className="testimonial-card text-center">
        <div className="relative mb-10">
          <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />
          <div className="quote-icon">
            <FaQuoteLeft className="text-blue-600 text-2xl" />
          </div>
        </div>
        <p>"{quote}"</p>
        <hr className="w-24 mx-auto my-4 border-gray-300" />
        <h3 className="font-bold">{name}</h3>
        <h6 className="text-blue-600">{profession}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;