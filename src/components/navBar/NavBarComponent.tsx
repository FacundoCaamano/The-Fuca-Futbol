import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { useTheme } from '../../context/ThemeContext';
import sol from '../../assets/sun.png' 
import luna from '../../assets/moon.png' 
import { useState } from 'react';
export const NavBar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [rotating, setRotating] = useState(false);

  const handleClick = () => {
    setRotating(true); // Activa la animación
    toggleTheme(); // Cambia el tema
    setTimeout(() => setRotating(false), 500); // Desactiva la animación después de 0.5s
  };
    return(
        <nav className={isDarkMode ? "navBar-darkMode" : "navBar"}>
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
    )
}