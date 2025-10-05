import React, { useState, useEffect } from 'react';
import DoctorCard from '../doctorCard/DoctorCard.jsx';
import './DoctorList.css';

const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Ricardo Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 2,
    name: 'Dr. Richard Luz',
    specialty: 'Generalista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 3,
    name: 'Dr. Ricard Luz',
    specialty: 'Oftamologist',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 4,
    name: 'Dr. Ric Luz',
    specialty: 'Estetica',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 5,
    name: 'Dr. Rizinho Luz',
    specialty: 'Dentista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 6,
    name: 'Dr. Ricardio Luz',
    specialty: 'Cardiologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
];

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setTimeout(() => {
          setDoctors(mockDoctors);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Falha ao buscar os médicos.');
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <div className="loading-message">Carregando médicos...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="doctor-list-container">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;