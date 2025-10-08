import React, { useState } from 'react';
import Navbar from '../../components/Navbar/NavbarPaciente.jsx';
import Container from '../../components/Container/Container';
import DoctorList from '../../components/doctorList/DoctorList.jsx';

const Paciente = () => {
  const [currentView, setCurrentView] = useState('medico');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'medico':
        return <DoctorList />;
      case 'agendamentos':
        return <div>Bem-vindo à Agendamentos</div>;
    }
  };

  const returnName = () => {
    switch (currentView) {
      case 'medico':
        return "Médico";
      case 'agendamentos':
        return "Agendamentos";
    }
  };

  return (

    <div>
      <Navbar onNavigate={handleNavigation} activeView={currentView} />
      <Container name={returnName()}>
        {renderContent()}
      </Container>
    </div>
  );
};

export default Paciente;