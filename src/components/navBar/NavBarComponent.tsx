import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { useTheme } from '../../context/ThemeContext';
import sol from '../../assets/sun.png' 
import luna from '../../assets/moon.png' 
import { useState } from 'react';
export const NavBar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [rotating, setRotating] = useState(false);
    const viewPort = window.innerWidth
    const [openNavBar, setOpenNavBar] = useState(false)
 

    const handleClick = () => {
        setRotating(true); 
        toggleTheme(); 
        setTimeout(() => setRotating(false), 500);
    };
    const ClicknavBar=()=>{
        setOpenNavBar(!openNavBar)
    }
    const navClass = `${
        isDarkMode ? (viewPort > 800 ? 'navBar-darkMode' : 'navBar-darkMode-mobile') 
                   : (viewPort > 800 ? 'navBar' : 'navBarMobile')
    } ${openNavBar ? '' : 'closed'}`; 
    return(
        <>
            {
                viewPort > 800 ? '' :
                <button className='btn_menu' onClick={ClicknavBar}>Menu</button>
            }
        <nav className={navClass}>
            <ul>
                <NavLink to="/home"
                       className={({ isActive }) => (isActive ? 'active' : 'disabled')}>
                        <li>
                            Inicio
                        </li>
                </NavLink>
                <NavLink to="/dashboard"
                       className={({ isActive }) => (isActive ? 'active' : 'disabled')}>
                        <li>
                            Lista de jugadores
                        </li>
                </NavLink>
                <NavLink to="/teams"
                       className={({ isActive }) => (isActive ? 'active' : 'disabled')}>
                        <li>
                            Crear equipos
                        </li>
                </NavLink>
                <li>
                <img 
                     className={`changeMode ${rotating ? 'rotate' : ''}`}
                     onClick={handleClick}
                     src={isDarkMode ? luna : sol}
                     alt="Toggle Theme"
                     />
                </li>
            </ul>
        </nav>
                     </>
    )
}