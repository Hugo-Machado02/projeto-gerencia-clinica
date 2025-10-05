import React, { useState, useEffect } from 'react';
import DoctorCard from '../doctorCard/DoctorCard';
import './DoctorList.css';

// --- DADOS MOCKADOS ---
// Em um projeto real, esses dados viriam do seu banco de dados/API
const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Ricardo Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png', // URL de exemplo, substitua pela sua
  },
  {
    id: 2,
    name: 'Dr. Ricardo Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 3,
    name: 'Dr. Ricardo Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 4,
    name: 'Dr. Ricardo Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 5,
    name: 'Dr. Ricardo Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
    {
    id: 6,
    name: 'Dr. Ricardo Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
];


const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // --- SIMULANDO UMA CHAMADA À API ---
    // A função fetchDoctors buscaria os dados do seu backend
    const fetchDoctors = async () => {
      try {
        // Substitua este setTimeout por sua chamada de API real
        // Ex: const response = await fetch('https://sua-api.com/medicos');
        //     const data = await response.json();
        //     setDoctors(data);
        setTimeout(() => {
          setDoctors(mockDoctors);
          setLoading(false);
        }, 1000); // Simula 1 segundo de carregamento
      } catch (err) {
        setError('Falha ao buscar os médicos.');
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

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