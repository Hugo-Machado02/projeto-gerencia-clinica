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
      default:
        return <div>Bem-vindo à página do paciente</div>;
    }
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      <Container>
        {renderContent()}
      </Container>
    </div>
  );
};

export default Paciente;