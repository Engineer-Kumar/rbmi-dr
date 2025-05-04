import React from 'react';
import DoctorCard from '../DoctorCard';

const DoctorsPreview = () => {
  const doctors = [
    {
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      image: '/images/doctor1.jpg'
    },
    {
      name: 'Dr. Jane Smith',
      specialization: 'Pediatrician',
      image: '/images/doctor2.jpg'
    },
    {
      name: 'Dr. Emily Johnson',
      specialization: 'Dermatologist',
      image: '/images/doctor3.jpg'
    },
    // Add other doctors similarly
  ];

  return (
    <section>
      <style>{`
        .doctors-preview {
          background: #f4f7fa;
          padding: 60px 20px;
          font-family: 'Arial', sans-serif;
          color: #333;
        }

        .doctors-preview .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .doctors-preview h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #007bff;
          font-weight: 700;
        }

        .doctors-preview p {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 40px;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
      `}</style>

      <section className="doctors-preview">
        <div className="container">
          <h2>Our Doctors</h2>
          <p>Qualified Healthcare Professionals</p>
          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default DoctorsPreview;