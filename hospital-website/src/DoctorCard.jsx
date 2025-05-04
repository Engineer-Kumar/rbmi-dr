import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-img" />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>{doctor.qualification}</p>
    </div>
  );
};

export default DoctorCard;