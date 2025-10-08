import './Navbar.css'
import image from '../../assets/paciente.jpg'
import useClickModal from '../../hooks/useClickModal';
import useNavigationPages from '../../hooks/useNavigationPages';

const Navbar = ({ onNavigate, activeView }) => {
    const {isOpen: isMenuUserOpen, setIsOpen: setIsMenuUserOpen, ref: dropdownRef} = useClickModal();
    const { clickLinkNavbar, getLinkClass } = useNavigationPages(onNavigate, activeView);
    

    const toggleMenuUser = () => {
        setIsMenuUserOpen(!isMenuUserOpen);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <a className={getLinkClass('medico')} onClick={clickLinkNavbar('medico')}>Health<span>Sync</span></a>

                </div>
                <ul className='list'>
                    <li><a className={getLinkClass('medico')} onClick={clickLinkNavbar('medico')}>Médico</a></li>
                    <li><a className={getLinkClass('agendamentos')} onClick={clickLinkNavbar('agendamentos')}>Agendamentos</a></li>
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
                        <a className='menu-item'>Minha Conta</a>
                        <a className='menu-item'>Alterar Senha</a>
                        <hr className='menu-divider' />
                        <a className='menu-item logout'>Sair</a>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
