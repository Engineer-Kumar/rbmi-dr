import React from 'react';

const FeaturesSection = () => {
  return (
    <section>
      <style>{`
        .features {
          background: #f4f7fa;
          padding: 60px 20px;
          font-family: 'Arial', sans-serif;
          color: #333;
        }

        .features .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .features h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #007bff;
          font-weight: 700;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .feature-icon {
          font-size: 3rem;
          color: #007bff;
          margin-bottom: 15px;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin: 10px 0;
          color: #333;
        }

        .feature-card p {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }
      `}</style>

      <section className="features">
        <div className="container">
          <h2>Our Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Qualified Doctors</h3>
              <p>Experienced and specialized medical professionals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-ambulance"></i>
              </div>
              <h3>Emergency Services</h3>
              <p>24/7 emergency care with rapid response</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Accurate Testing</h3>
              <p>State-of-the-art diagnostic facilities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-ambulance"></i>
              </div>
              <h3>Free Ambulance</h3>
              <p>Emergency ambulance services at no cost</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeaturesSection;