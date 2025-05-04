import React from 'react';

const Search = () => {
  return (
    <div>
      <style>{`
        .search-section {
          background-color: #007bff; /* Professional blue background */
          padding: 80px 20px; /* Increased padding for a spacious feel */
          color: #ffffff; /* White text color */
          text-align: center; /* Centered text */
        }

        .search-section h5 {
          font-size: 1.5rem; /* Font size for subheading */
          text-transform: uppercase; /* Uppercase for emphasis */
          border-bottom: 4px solid rgba(255, 255, 255, 0.5); /* Subtle border */
          margin-bottom: 10px; /* Margin below the subheading */
        }

        .search-section h1 {
          font-size: 3rem; /* Larger font size for the main heading */
          margin-bottom: 20px; /* Margin below the main heading */
          font-weight: 700; /* Bold font for emphasis */
        }

        .search-section h5.description {
          font-size: 1rem; /* Font size for description */
          margin-bottom: 30px; /* Margin below the description */
          color: rgba(255, 255, 255, 0.8); /* Slightly muted white color */
        }

        .search-container {
          max-width: 600px; /* Limit the width for better readability */
          margin: 0 auto; /* Center the container */
        }

        .search-container .flex {
          display: flex; /* Flexbox for input and button layout */
          gap: 10px; /* Space between elements */
        }

        .search-container select,
        .search-container input {
          height: 50px; /* Consistent height for inputs */
          border: 2px solid #007bff; /* Blue border */
          border-radius: 5px; /* Rounded corners */
          padding: 0 15px; /* Padding inside inputs */
          font-size: 1rem; /* Font size for inputs */
          outline: none; /* Remove outline on focus */
          transition: border-color 0.3s ease; /* Smooth border color transition */
        }

        .search-container select:focus,
        .search-container input:focus {
          border-color: #0056b3; /* Darker blue on focus */
        }

        .search-container button {
          height: 50px; /* Consistent height for button */
          background-color: #343a40; /* Dark gray background */
          color: #ffffff; /* White text color */
          border: none; /* Remove border */
          border-radius: 5px; /* Rounded corners */
          font-size: 1rem; /* Font size for button */
          cursor: pointer; /* Pointer cursor on hover */
          transition: background-color 0.3s ease; /* Smooth background color transition */
        }

        .search-container button:hover {
          background-color: #495057; /* Lighter gray on hover */
        }

        @media (max-width: 768px) {
          .search-section h1 {
            font-size: 2.5rem; /* Responsive font size for smaller screens */
          }

          .search-section h5 {
            font-size: 1.2rem; /* Responsive font size for smaller screens */
          }
        }
      `}</style>

      <div className="py-20 search-section" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-md mx-auto">
            <h5>Find A Doctor</h5>
            <h1>Find A Healthcare Professional</h1>
            <h5 className="description">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
          </div>
          <div className="search-container max-w-lg mx-auto">
            <div className="flex">
              <select>
                <option>Department</option>
                <option>Medicine</option>
                <option>Surgery</option>
                <option>Orthopedics</option>
              </select>
              <input 
                type="text" 
                placeholder="Keyword" 
              />
              <button>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;