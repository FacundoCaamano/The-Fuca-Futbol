import './Dashboard.css'
import { ModalComponent } from './modal/ModalComponent'

export const DashboardComponent = () =>{
    const players = localStorage.getItem('jugadores')
    return(
        <div className="dashboard">
            <div className="dashboard--newPlayer" data-bs-toggle="modal" data-bs-target="#modalNewPlayer">
                    <button className="dashboard--newPlayer__button">Crear nuevo jugador</button> 
            </div>
            <ModalComponent></ModalComponent>
            <p>

            {players}
            </p>
        </div>
    )
}