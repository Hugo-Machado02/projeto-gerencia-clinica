import React, { useState, useEffect, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import InputGroup from '../InputGroup/InputGroup';

import './ModalReagendamentos.css';

const ModalReagendamentos = forwardRef(({ isOpen, onClose, appointment }, ref) => {
  const [formData, setFormData] = useState({
        dateTxt: '',
        timeTxt: '',
    });

  const [modalReagendamento, setModalReagendamento] = useState(null);

  useEffect(() => {
    setModalReagendamento(document.getElementById('modal-root'));
  }, []);

  useEffect(() => {
        if (isOpen && appointment) {
            const [day, month, year] = appointment.date.split('/');
            const formattedMonth = month.padStart(2, '0');
            const formattedDay = day.padStart(2, '0');
            const initialDate = `${year}-${formattedMonth}-${formattedDay}`;
            const initialTime = appointment.time;

            setFormData({
                dateTxt: initialDate,
                timeTxt: initialTime,
            });
        }
    }, [isOpen, appointment]);

  if (!isOpen || !modalReagendamento || !appointment) {
    return null;
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };
    
  const handleRescheduleSubmit = (e) => {
    e.preventDefault();
    
    const newDate = formData.dateTxt;
    const newTime = formData.timeTxt;

    console.log(`Dados para reagendar: ${newDate} às ${newTime}`);
    
    // Lógica de API aqui
    
    onClose(); 
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" ref={ref} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Reagendar Consulta</h3>
        </div>
        <div className="modal-body">
          <p className="modal-specialty"><strong>{appointment.doctor}</strong> - {appointment.specialty}</p>
          <p className="modal-current-date">Agendamento atual: {appointment.date} às {appointment.time}</p>

          <form className="reschedule-form" onSubmit={handleRescheduleSubmit}>
            <div className="element-container-reagendamento">
              <InputGroup type="date" value={formData.dateTxt} name="dateTxt" onChange={handleFormChange} label="Nova Data" placehoder="Digite a Data" className="element-reagendamentno"></InputGroup>
              <InputGroup type="time" value={formData.timeTxt} name="timeTxt" onChange={handleFormChange} label="Novo Horário" placehoder="Digite o horário" className="element-reagendamento"></InputGroup>
            </div>
            <div className="btns-reagendamento">
              <button type="submit" className="btn-reagendamento">Reagendar</button>
              <button type="button" className="btn-reagendamento cancelar-reagendamento" onClick={onClose} aria-label="Fechar">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    modalReagendamento
  );
});

ModalReagendamentos.displayName = 'ModalAgendamentos';

export default ModalReagendamentos;