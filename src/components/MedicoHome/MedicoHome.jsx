import React from 'react';
import { FaUserFriends, FaCalendarCheck, FaCalendarAlt, FaTimesCircle } from 'react-icons/fa';
import './MedicoHome.css';

const metricData = [
    {
        title: "Total de Pacientes",
        value: 124,
        icon: FaUserFriends,
        description: "Pacientes ativos cadastrados."
    },
    {
        title: "Consultas Hoje",
        value: 8,
        icon: FaCalendarCheck,
        description: "Agendamentos confirmados para hoje."
    },
    {
        title: "Próximas 7 Dias",
        value: 35,
        icon: FaCalendarAlt,
        description: "Consultas agendadas para a próxima semana."
    },
    {
        title: "Cancelamentos (Mês)",
        value: 3,
        icon: FaTimesCircle,
        description: "Consultas canceladas no mês atual."
    }
];

const MedicoHome = ({ doctorName = "Dr. Ricardo Luz" }) => {
    return (
        <div className="medico-home-layout">
            <h2 className="medico-home-welcome">
                Bem-vindo(a), {doctorName}!
            </h2>

            <div className="metric-cards-grid">
                {metricData.map((metric, index) => (
                    <div key={index} className="metric-card">
                        <div className="metric-icon">
                            <metric.icon size={30} /> 
                        </div>
                        <div className="metric-info">
                            <p className="metric-title">{metric.title}</p>
                            <h3 className="metric-value">{metric.value}</h3>
                            <p className="metric-description">{metric.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="medico-home-section">
                <h3 className="section-title">Próximos Agendamentos</h3>
                <div className="upcoming-appointments-list">
                    <p>Você tem 3 agendamentos pendentes nas próximas 48 horas.</p>
                </div>
            </div>
        </div>
    );
};

export default MedicoHome;