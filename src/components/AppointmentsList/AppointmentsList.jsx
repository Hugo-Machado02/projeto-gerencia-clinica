import React, {useState, useRef} from 'react';
import AppointmentsCard from '../AppointmentCard/AppointmentCard';
import './AppointmentsList.css';
import ModalReagendamentos from '../ModalReagendamentos/ModalReagendamentos';

const mockAppointments = [
  {
    id: 1,
    date: '08/12/2024',
    time: '11:30',
    doctor: 'Dr. Carlos Lima',
    specialty: 'Neurologia',
    status: 'Realizado',
    canCancel: false,
    canReschedule: false
  },
  {
    id: 2,
    date: '15/12/2024',
    time: '09:00',
    doctor: 'Dr. João Silva',
    specialty: 'Cardiologia',
    status: 'Realizado',
    canCancel: true,
    canReschedule: true
  },
  {
    id: 3,
    date: '18/12/2024',
    time: '14:30',
    doctor: 'Dra. Maria Santos',
    specialty: 'Dermatologia',
    status: 'Confirmado',
    canCancel: true,
    canReschedule: true
  },
  {
    id: 4,
    date: '10/12/2024',
    time: '10:15',
    doctor: 'Dr. Pedro Costa',
    specialty: 'Ortopedia',
    status: 'Cancelado',
    canCancel: false,
    canReschedule: false
  },
  {
    id: 5,
    date: '22/12/2024',
    time: '16:00',
    doctor: 'Dra. Ana Oliveira',
    specialty: 'Ginecologia',
    status: 'Cancelado',
    canCancel: false,
    canReschedule: false
  }
];

const AppointmentsList = ({ appointments = mockAppointments }) => {

  const [isModalReagendamentoOpen, setIisModalReagendamentoOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const modalRef = useRef(null);

  const handleOpenRescheduleModal = (appointmentToReschedule) => {
    setSelectedAppointment(appointmentToReschedule);
    setIisModalReagendamentoOpen(true);
  };

  const handleCloseModal = () => {
    setIisModalReagendamentoOpen(false);
    setSelectedAppointment(null); 
  };

  if (!appointments || appointments.length === 0) {
    return <p>Nenhum agendamento encontrado.</p>;
  }

  return (
    <>
    <div className="appointments-list">
      {appointments.map((appointment) => (
        <AppointmentsCard key={appointment.id} appointment={appointment} onRescheduleClick={handleOpenRescheduleModal}/>
      ))}
    </div>

    <ModalReagendamentos isOpen={isModalReagendamentoOpen} onClose={handleCloseModal} appointment={selectedAppointment} ref={modalRef} />
    </>
  );
};

export default AppointmentsList;