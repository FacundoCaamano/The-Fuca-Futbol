import './Dashboard.css'
import { ModalComponent } from './modal/ModalComponent'
import { PlayersListComponent } from './playersList/PlayerListComponent'

export const DashboardComponent = () =>{
    
    return(
        <div className="dashboard">
            <div className="dashboard--newPlayer" >
                    <h3 className="titleListComponent">Jugadores</h3>
                    <button className="dashboard--newPlayer__button" data-bs-toggle="modal" data-bs-target="#modalNewPlayer">Crear nuevo jugador</button> 
            </div>
            <ModalComponent></ModalComponent>
            <div className='dashboard--list'>
                <PlayersListComponent></PlayersListComponent>
            </div>
        </div>
    )
}