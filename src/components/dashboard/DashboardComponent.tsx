import './Dashboard.css'
import { ModalComponent } from './modal/ModalComponent'
import { PlayersListComponent } from './playersList/PlayerListComponent'

export const DashboardComponent = () =>{
    
    return(
        <div className="dashboard">
            <div className="dashboard--newPlayer" data-bs-toggle="modal" data-bs-target="#modalNewPlayer">
                    <h3 className="titleListComponent">Jugadores</h3>
                    <button className="dashboard--newPlayer__button">Crear nuevo jugador</button> 
            </div>
            <ModalComponent></ModalComponent>
            <div className='dashboard--list'>
                <PlayersListComponent></PlayersListComponent>
            </div>
        </div>
    )
}