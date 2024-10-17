import { useContext } from "react"
import { PlayersContext } from "../../../context/PlayersContext"
import { CardPlayerComponent } from "./cardPlayer/cardPlayerComponent"
import './PlayerList.css'
export const PlayersListComponent=()=>{
    const context = useContext(PlayersContext)
    if(!context){
        return(
            <div>
                <h3>No hay jugadores creados</h3>
            </div>
        )
    }
    const {players} = context
    
    return(
        <div>
            <h3>Jugadores</h3>
            <div className="cardsPlayersContainer">
            {players.map((player)=>(
                    <CardPlayerComponent player={player} key={player.id}></CardPlayerComponent>
                ))}
                </div>
        </div>
    )
}