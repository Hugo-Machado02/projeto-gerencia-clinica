import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import DoctorList from '../../components/doctorList/DoctorList.jsx';
import './Paciente.css';

const Paciente = () => {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'medicos':
        return <DoctorList />;
      case 'home':
      default:
        return <div>Bem-vindo à página do paciente</div>;
    }
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      {currentView === 'medicos' && (
        <h1 style={{ color: '#0D47A1', fontWeight: 'bold', textAlign: 'left', margin: '20px 0', fontSize: '2rem', width: '90%', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '50px' }}>Médicos</h1>
      )}
      <Container>
        {renderContent()}
      </Container>
    </div>
  );
};

export default Paciente;