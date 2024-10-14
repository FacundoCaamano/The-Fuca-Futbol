import './Dashboard.css'
import { ModalComponent } from './modal/ModalComponent'
import { PlayersListComponent } from './playersList/PlayerListComponent'

export const DashboardComponent = () =>{
    
    return(
        <div className="dashboard">
            <div className="dashboard--newPlayer" data-bs-toggle="modal" data-bs-target="#modalNewPlayer">
                    <button className="dashboard--newPlayer__button">Crear nuevo jugador</button> 
            </div>
            <ModalComponent></ModalComponent>
            <div>
                <PlayersListComponent></PlayersListComponent>
            </div>
        </div>
    )
}