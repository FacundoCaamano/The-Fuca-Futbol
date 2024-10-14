import { useContext } from "react"
import { PlayersContext } from "../../../context/PlayersContext"

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
            <h3>lista</h3>
            {players.map((player,index)=>(
                <div key={index}>
                     <h3>{player.nombre}</h3>
                    <p>Velocidad: {player.velocidad}</p>
                    <p>Pase: {player.pase}</p>
                    <p>Remate: {player.remate}</p>
                    <p>Defensa: {player.defensa}</p>
                </div>
            ))}
        </div>
    )
}