import { Link } from 'react-router-dom'
import './home.css'

export const HomeComponent = () =>{
    return(
        <>
            <div>
                <h2>Balanceador de Equipos de Fútbol</h2>
                <p>
                    organiza los equipos de tus partidos agregando a jugadores y asignandoles estadísticas para balancear los equipos de manera equitativa.
                </p>
                <Link to="/dashboard" >
                    <div className='cardDashboard'>
                        <h2>Agregar y Balancear Jugadores</h2>
                        <p>Haz clic aquí para agregar jugadores y formar equipos balanceados.</p>
                    </div>
                </Link>
            </div>
        </>
    )
}