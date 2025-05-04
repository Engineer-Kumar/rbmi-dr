import React from 'react';

const Appointment = () => {
  return (
    <>
      <style>{`
        .appointment-container {
          padding: 5rem 0;
          background-color: #1e3a8a; /* Dark blue background */
        }
        .appointment-title {
          color: white;
          text-transform: uppercase;
          border-bottom: 4px solid white;
          margin-bottom: 1rem;
        }
        .appointment-header {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .appointment-description {
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media(min-width: 640px) {
          .button-group {
            flex-direction: row;
          }
        }
        .appointment-button {
          background-color: white;
          color: #1e3a8a;
          font-weight: 600;
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          flex: 1;
          min-width: 120px;
          text-align: center;
        }
        .appointment-button:hover {
          background-color: #e0f2fe;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        .form-container {
          background-color: white;
          border-radius: 0.5rem;
          padding: 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .form-container:hover {
          transform: scale(1.05);
        }
        .form-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1e3a8a;
          font-weight: bold;
        }
        .form-input {
          background-color: #f3f4f6;
          border: none;
          height: 3.5rem;
          border-radius: 0.375rem;
          padding: 0 1rem;
          font-size: 1rem;
          color: #374151;
          box-shadow: inset 0 0 0 1px #d1d5db;
          transition: box-shadow 0.2s ease;
          width: 100%;
        }
        .form-input:focus {
          outline: none;
          box-shadow: 0 0 0 3px #93c5fd;
          background-color: white;
        }
        .submit-button {
          background-color: #1e3a8a;
          color: white;
          padding: 0.75rem 0;
          border-radius: 0.375rem;
          border: none;
          font-weight: 700;
          font-size: 1.125rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          width: 100%;
          grid-column: span 2;
        }
        .submit-button:hover {
          background-color: #1e40af;
        }
      `}</style>

      <div className="appointment-container" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <h5 className="appointment-title">Appointment</h5>
              <h1 className="appointment-header">Make An Appointment For Your Family</h1>
              <p className="appointment-description">
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, 
                justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. 
                Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
              </p>
              <div className="button-group">
                <button className="appointment-button">Find Doctor</button>
                <button className="appointment-button">Read More</button>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="form-container">
                <h1 className="form-title">Book An Appointment</h1>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="form-input">
                    <option>Choose Department</option>
                    <option>Medicine</option>
                    <option>Surgery</option>
                    <option>Orthopedics</option>
                  </select>
                  <select className="form-input">
                    <option>Select Doctor</option>
                    <option>Dr. Gareema Gupta</option>
                    <option>Dr. Rishi Aggarwal</option>
                    <option>Dr. R.K. Gupta</option>
                  </select>
                  <input type="text" className="form-input" placeholder="Your Name" />
                  <input type="email" className="form-input" placeholder="Your Email" />
                  <input type="tel" className="form-input" placeholder="Mobile No." />
                  <input type="text" className="form-input" placeholder="OTP" />
                  <input type="date" className="form-input" />
                  <input type="time" className="form-input" />
                  <button className="submit-button" type="submit">
                    Make An Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
