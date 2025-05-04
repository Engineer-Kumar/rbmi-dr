import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      <style>
        {`
          .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 50;
            transition: opacity 0.3s ease;
          }
          .back-to-top button {
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            padding: 12px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .back-to-top button:hover {
            background-color: #0056b3;
            transform: scale(1.1);
          }
          .back-to-top button:focus {
            outline: none;
          }
        `}
      </style>

      <div className="back-to-top">
        {isVisible && (
          <button 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default BackToTop;