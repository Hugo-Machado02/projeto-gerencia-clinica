import './Navbar.css'
import image from '../../assets/doctor.jpg'
import useClickModal from '../../hooks/useClickModal';
import useNavigationPages from '../../hooks/useNavigationPages';

const Navbar = ({ onNavigate,  activeView}) => {
    const {isOpen: isMenuUserOpen, setIsOpen: setIsMenuUserOpen, ref: dropdownRef} = useClickModal();
    const { getLinkClass, clickLinkNavbar } = useNavigationPages(onNavigate, activeView);
    

    const toggleMenuUser = () => {
        setIsMenuUserOpen(!isMenuUserOpen);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <a className={getLinkClass('home')} onClick={clickLinkNavbar('home')}>Health<span>Sync</span></a>

                </div>
                <ul className='list'>    
                    <li><a className={getLinkClass('home')} onClick={clickLinkNavbar('home')}>Home</a></li>
                    <li><a className={getLinkClass('pacientes')} onClick={clickLinkNavbar('pacientes')}>Pacientes</a></li>
                    <li><a className={getLinkClass('agendamentos')} onClick={clickLinkNavbar('agendamentos')}>Agendamentos</a></li>
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
                        <a href="" className='menu-item'>Minha Conta</a>
                        <a href="" className='menu-item'>Alterar Senha</a>
                        <hr className='menu-divider' />
                        <a href="" className='menu-item logout'>Sair</a>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
