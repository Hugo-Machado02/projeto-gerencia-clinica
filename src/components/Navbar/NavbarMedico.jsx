import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import image from '../../assets/doctor.jpg'

const Navbar = ({ onNavigate }) => {
    const [isMenuUserOpen, setIsMenuUserOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenuUser = () => {
        setIsMenuUserOpen(!isMenuUserOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsMenuUserOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <a href="#" className='element'>Health<span>Sync</span></a>

                </div>
                <ul className='list'>
                    <li><a href="#" className='element marked' onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Home</a></li>
                    <li><a href="#" className='element'>Pacientes</a></li>
                    <li><a href="#" className='element' onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('medicos'); }}>Médicos</a></li>
                    <li><a href="#" className='element'>Agendamentos</a></li>
                </ul>
                <div className='user' onClick={toggleMenuUser}>
                    <div className='info'>
                        <p className='name'>Dr. Ricardo Luz</p>
                        <p className='specialty'>Oftamologista</p>
                    </div>
                    <div className='photo'>
                        <img src={image} alt="Foto de Perfil" />
                    </div>
                </div>

                {isMenuUserOpen && (
                    <div className='dropdown-menu' ref={dropdownRef}>
                        <a href="#" className='menu-item'>Minha Conta</a>
                        <a href="#" className='menu-item'>Alterar Senha</a>
                        <hr className='menu-divider' />
                        <a href="#" className='menu-item logout'>Sair</a>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
