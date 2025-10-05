import './AppointmentCard.css';

function AppointmentCard({ appointment }) {
  const handleViewDetails = () => {
    alert(`Detalhes do agendamento de ${appointment.patientName}`);
  };

  const handleCancel = () => {
    if (confirm(`Deseja cancelar o agendamento de ${appointment.patientName}?`)) {
      alert('Agendamento cancelado!');
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-header">
        <h3 className="patient-name">{appointment.patientName}</h3>
        <span className="appointment-time">{appointment.time}</span>
      </div>
      <div className="appointment-details">
        <p className="appointment-date">{appointment.date}</p>
        <p className="appointment-type">{appointment.type}</p>
      </div>
      <div className="appointment-footer">
        <div className="appointment-status">
          <span className={`status ${appointment.status.toLowerCase()}`}>
            {appointment.status}
          </span>
        </div>
        <div className="appointment-actions">
          <button className="btn-details" onClick={handleViewDetails}>
            Ver Detalhes
          </button>
          <button className="btn-cancel" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCard;