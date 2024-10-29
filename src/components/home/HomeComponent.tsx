import { Link } from 'react-router-dom'
import './home.css'

export const HomeComponent = () =>{
    return(
        <>
            <div className='homeContainer'>
                <div>
                <hr />
                <h2>Balanceador de Equipos de Fútbol</h2>
                <p>
                    Organiza los equipos de tus partidos agregando a jugadores y asignándoles estadísticas para balancear los equipos de manera equitativa.
                </p>
                <hr />
                </div>
                    <div className='cardDashboard'>
                        <div className='cardDashboardLink'>
                            <h3>Agregar y Balancear Jugadores</h3>
                        <Link to="/dashboard" >
                            <p className='buttonHome'>Haz clic aquí para agregar jugadores y formar equipos balanceados.</p>
                        </Link>
                        </div>
                    </div>
                    <hr />
            </div>
        </>
    )
}