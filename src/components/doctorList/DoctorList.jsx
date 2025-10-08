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
    name: 'Dr. Lucas Pereira',
    specialty: 'Gastroenterologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 3,
    name: 'Dr. Ricard Luz',
    specialty: 'Oftalmologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 4,
    name: 'Dra. Ana Costa',
    specialty: 'Pediatra',
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
    name: 'Dr. Rafael Almeida',
    specialty: 'Neurologista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 7,
    name: 'Dra. Juliana Ferreira',
    specialty: 'Pediatra',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 8,
    name: 'Dr. Gustavo Ribeiro',
    specialty: 'Estética',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 9,
    name: 'Dra. Patrícia Soares',
    specialty: 'Dentista',
    imageUrl: 'https://i.imgur.com/L3dwsP4.png',
  },
  {
    id: 10,
    name: 'Dr. Marcelo Cunha',
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
        // Chamada real para API - listagem completa
        // const response = await fetch('http://localhost:3000/medicos');
        // if (!response.ok) {
        //   throw new Error('Erro ao buscar médicos');
        // }
        // const data = await response.json();
        // setDoctors(data);
        // setLoading(false);

        // Exemplos com parâmetros:
        // const response = await fetch('http://localhost:3000/medicos?page=1&limit=10'); // Paginação
        // const response = await fetch('http://localhost:3000/medicos?specialty=Cardiologista'); // Filtro por especialidade
        // const response = await fetch('http://localhost:3000/medicos?search=Ricardo'); // Busca por nome

        // Simulação com dados mockados
        // setTimeout(() => {
        //   setDoctors(mockDoctors);
        //   setLoading(false);
        // }, 1000);
        setDoctors(mockDoctors);
        setLoading(false);
      } catch (err) {
        setError('Falha ao buscar os médicos.');
        console.error(err);
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