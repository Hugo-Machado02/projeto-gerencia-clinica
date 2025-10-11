import React from 'react';
import './DoctorCard.css';
import image from '../../assets/doctor.jpg';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt={`Foto de ${doctor.name}`} className="doctor-photo" />
      <h3 className="doctor-name">{doctor.name}</h3>
      <p className="doctor-specialty">{doctor.specialty}</p>
      <button className="schedule-button">Agendar Consulta</button>
    </div>
  );
};

export default DoctorCard;