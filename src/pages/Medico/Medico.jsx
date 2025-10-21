import React, { useState } from 'react'
import Navbar from '../../components/Navbar/NavbarMedico'
import Container from '../../components/Container/Container'
import GenericTable from '../../components/GenericTable/GenericTable'
import AppointmentsList from '../../components/AppointmentsList/AppointmentsList'
import MedicoHome from '../../components/MedicoHome/MedicoHome'

const mockClients = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    fullName: `Cliente Teste ${i + 1}`,
    cpf: `123.${String(i * 3 + 1).padStart(3, '0')}.${String(i * 2 + 1).padStart(3, '0')}-00`,
    phone: `(99) 9${String(i + 10).padStart(4, '0')}-${String(i + 50).padStart(4, '0')}`,
}));

const clientColumns = [
    { header: 'Nome Completo', key: 'fullName', flex: 3 },
    { header: 'CPF', key: 'cpf', flex: 2 },
    { header: 'Telefone', key: 'phone', flex: 2 },
];

const Medico = () => {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

 const renderContent = () => {
        switch (currentView) {
            case 'home':
                return <MedicoHome />;
            case 'pacientes':
                return <GenericTable data={mockClients} columns={clientColumns} />;
            case 'agendamentos':
                return <AppointmentsList />;;
            default:
                return <div>Página não encontrada.</div>;
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
