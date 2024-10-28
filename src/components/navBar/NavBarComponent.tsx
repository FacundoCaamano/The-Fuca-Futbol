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
                <NavLink to="/teams"
                       className={({ isActive }) => (isActive ? 'active' : 'disabled')}>
                        <li>
                            Crear equipos
                        </li>
                </NavLink>
                <div data-bs-toggle="modal" data-bs-target="#modalNewPlayer" className='createPlayer'>
                        <li>
                            Crear jugador
                        </li>
                </div>
            </ul>
        </nav>
    )
}