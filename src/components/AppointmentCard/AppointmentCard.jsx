import React from 'react';
import './AppointmentCard.css';

const AppointmentsCard = ({ appointment }) => {
  const { date, time, doctor, specialty, status, canCancel, canReschedule } = appointment;

  const formatDate = (dateString) => {
    const [day, month] = dateString.split('/');
    const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    return `${day} DE ${months[parseInt(month) - 1]}`;
  };

  const getStatusClassName = (status) => {
    switch (status) {
      case 'Confirmado':
        return 'status-confirmado';
      case 'Realizado':
        return 'status-realizado';
      case 'Cancelado':
        return 'status-cancelado';
      default:
        return 'status-default';
    }
  };

  return (
    <div className="appointment-card">
      <div className="appointment-details">
        <div className="appointment-datetime">
          <p className="date-text">{formatDate(date)}</p>
          <p className="time-text">{time}</p>
          <div className={`status-badge ${getStatusClassName(status)}`}>
            <p>{status}</p>
          </div>
        </div>

        <div className="appointment-info">
          <p className="doctor-name">{doctor}</p>
          <p className="specialty-name">{specialty}</p>
        </div>
      </div>

      <div className="appointment-actions">
        {canCancel && <button className="action-button cancel-button">Cancelar</button>}
        {canReschedule && <button className="action-button reschedule-button">Remarcar</button>}
      </div>
    </div>
  );
};

export default AppointmentsCard;