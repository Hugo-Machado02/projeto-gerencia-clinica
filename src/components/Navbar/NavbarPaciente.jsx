import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import image from '../../assets/paciente.jpg'

const Navbar = () => {
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
                    <li><a href="#" className='element'>Médico</a></li>
                    <li><a href="#" className='element'>Agendamentos</a></li>
                </ul>
                <div className='user' onClick={toggleMenuUser}>
                    <div className='info'>
                        <p className='name'>Lucas Silva</p>
                        <p className='specialty'>Paciente</p>
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
