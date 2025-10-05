import AppointmentCard from '../AppointmentCard/AppointmentCard';
import './AppointmentsList.css';

function AppointmentsList() {
  const mockAppointments = [
    {
      patientName: "Maria Silva",
      time: "09:00",
      date: "15/12/2024",
      type: "Consulta Geral",
      status: "Confirmado"
    },
    {
      patientName: "João Santos",
      time: "10:30",
      date: "15/12/2024",
      type: "Exame de Rotina",
      status: "Pendente"
    },
    {
      patientName: "Ana Costa",
      time: "14:00",
      date: "15/12/2024",
      type: "Retorno",
      status: "Confirmado"
    },
    {
      patientName: "Pedro Lima",
      time: "16:15",
      date: "15/12/2024",
      type: "Consulta Especializada",
      status: "Cancelado"
    },
    {
      patientName: "Maria Silva",
      time: "09:00",
      date: "15/12/2024",
      type: "Consulta Geral",
      status: "Confirmado"
    },
    {
      patientName: "João Santos",
      time: "10:30",
      date: "15/12/2024",
      type: "Exame de Rotina",
      status: "Pendente"
    },
    {
      patientName: "Ana Costa",
      time: "14:00",
      date: "15/12/2024",
      type: "Retorno",
      status: "Confirmado"
    },
    {
      patientName: "Pedro Lima",
      time: "16:15",
      date: "15/12/2024",
      type: "Consulta Especializada",
      status: "Cancelado"
    }
  ];

  return (
    <div className="appointments-list">
      <h2 className="list-title">Agendamentos</h2>
      <div className="appointments-container">
        {mockAppointments.map((appointment, index) => (
          <AppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
}

export default AppointmentsList;