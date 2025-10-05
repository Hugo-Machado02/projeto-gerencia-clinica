import React from 'react';
import AppointmentsCard from '../AppointmentCard/AppointmentCard';
import './AppointmentsList.css';

const mockAppointments = [
  {
    id: 1,
    date: '15/12/2024',
    time: '09:00',
    doctor: 'Dr. João Silva',
    specialty: 'Cardiologia',
    status: 'Confirmado',
    canCancel: true,
    canReschedule: true
  },
  {
    id: 2,
    date: '18/12/2024',
    time: '14:30',
    doctor: 'Dra. Maria Santos',
    specialty: 'Dermatologia',
    status: 'Confirmado',
    canCancel: true,
    canReschedule: true
  },
  {
    id: 3,
    date: '10/12/2024',
    time: '10:15',
    doctor: 'Dr. Pedro Costa',
    specialty: 'Ortopedia',
    status: 'Realizado',
    canCancel: false,
    canReschedule: false
  },
  {
    id: 4,
    date: '22/12/2024',
    time: '16:00',
    doctor: 'Dra. Ana Oliveira',
    specialty: 'Ginecologia',
    status: 'Confirmado',
    canCancel: true,
    canReschedule: true
  },
  {
    id: 5,
    date: '08/12/2024',
    time: '11:30',
    doctor: 'Dr. Carlos Lima',
    specialty: 'Neurologia',
    status: 'Realizado',
    canCancel: false,
    canReschedule: false
  }
];

const AppointmentsList = ({ appointments = mockAppointments }) => {
  if (!appointments || appointments.length === 0) {
    return <p>Nenhum agendamento encontrado.</p>;
  }

  return (
    <div className="appointments-list">
      {appointments.map((appointment) => (
        <AppointmentsCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default AppointmentsList;