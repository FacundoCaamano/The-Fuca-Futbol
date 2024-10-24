import { NavLink } from 'react-router-dom'
import './NavBar.css'
export const NavBar = () => {
    return(
        <nav className="navBar">
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
                <NavLink to="/"
                       className={({ isActive }) => (isActive ? 'active' : 'disabled')}>
                        <li>
                            Crear jugador
                        </li>
                </NavLink>
            </ul>
        </nav>
    )
}