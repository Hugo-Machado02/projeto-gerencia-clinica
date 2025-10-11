import React, { useState } from 'react'
import Navbar from '../../components/Navbar/NavbarMedico'
import Container from '../../components/Container/Container'

const Medico = () => {

  const [currentView, setCurrentView] = useState('home');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <div>Bem-vindo à Home</div>;
      case 'pacientes':
        return <div>Bem-vindo à Pacientes</div>;
      case 'agendamentos':
        return <div>Bem-vindo à Agendamentos</div>;
    }
  };

  const returnName = () => {
    switch (currentView) {
      case 'home':
        return "Médico";
      case 'pacientes':
        return "Pacientes";
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
  )
}

export default Medico
