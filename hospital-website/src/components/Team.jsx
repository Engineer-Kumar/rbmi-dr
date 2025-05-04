import React from 'react';
import TeamCard from './TeamCard';

const Team = () => {
  const doctors = [
    { 
      image: '/img/team-1.jpg', 
      name: 'Dr. Gareema Gupta', 
      specialization: 'MBBS, MD, PATHOLOGIST', 
      link: '/doctors/dr-gareema-gupta' 
    },
    {
      image: '/img/team-2.jpg',
      name: 'Dr. Rajesh Kumar',
      specialization: 'MBBS, MS, ORTHOPEDIC SURGEON',
      link: '/doctors/dr-rajesh-kumar'
    },
    {
      image: '/img/team-3.jpg',
      name: 'Dr. Anjali Verma',
      specialization: 'MBBS, DNB, PEDIATRICIAN',
      link: '/doctors/dr-anjali-verma'
    },
    {
      image: '/img/team-4.jpg',
      name: 'Dr. Vikram Singh',
      specialization: 'MBBS, MD, CARDIOLOGIST',
      link: '/doctors/dr-vikram-singh'
    },
    // Add more doctors as needed
  ];

  return (
    <div>
      <style>{`
        .team-section {
          padding: 80px 20px; /* Increased padding for spacious feel */
          background-color: #f4f7fa; /* Light background for contrast */
        }

        .team-section h5 {
          font-size: 1.5rem; /* Font size for subheading */
          color: #007bff; /* Blue color for subheading */
          text-transform: uppercase; /* Uppercase for emphasis */
          border-bottom: 4px solid #007bff; /* Border below subheading */
          margin-bottom: 10px; /* Margin below subheading */
        }

        .team-section h1 {
          font-size: 2.5rem; /* Font size for main heading */
          margin-bottom: 40px; /* Margin below main heading */
          color: #333; /* Dark color for main heading */
          font-weight: 700; /* Bold font for emphasis */
        }

        .team-grid {
          display: grid; /* Grid layout for team cards */
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
          gap: 20px; /* Space between cards */
        }

        @media (max-width: 768px) {
          .team-section h1 {
            font-size: 2rem; /* Responsive font size for smaller screens */
          }

          .team-section h5 {
            font-size: 1.2rem; /* Responsive font size for smaller screens */
          }
        }
      `}</style>

      <div className="team-section" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-md mx-auto">
            <h5>Our Doctors</h5>
            <h1>Qualified Healthcare Professionals</h1>
          </div>
          <div className="team-grid">
            {doctors.map((doctor, index) => (
              <TeamCard key={index} {...doctor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
