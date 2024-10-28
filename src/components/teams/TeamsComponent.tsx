import { useContext } from "react"
import { PlayersContext } from "../../context/PlayersContext"
import { userTeamBalanced } from "../../hooks/useTeamBalancer"
import './Teams.css'
export const TeamsComponent = () =>{
    const context = useContext(PlayersContext)
    const playersContext=context?.players
    const {addPlayer,players,removePlayer,balanceTeams,team1,team2} = userTeamBalanced()
    
    return(
        <>
             <h3>crear equipos</h3>
            <div className="players">
            <h3>Selecciona a los participantes</h3>
                <div className="players-grid">
                    {playersContext?.map(player => (
                        <div key={player.id} className="player-card">
                            <span>{player.nombre}</span>
                            <button onClick={() => addPlayer(player)} className="button-add">Agregar</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="playersSelected">
                <h3>Jugadores seleccionados</h3>
                <table>
                        <tr>
                            <th>nombre</th>
                            <th>Defensa</th>
                            <th>Velocidad</th>
                            <th>Pase</th>
                            <th>remate</th>
                            <th></th>
                        </tr>
                        {players.map(p=> 
                    
                                <tr>
                                    <td>{p.nombre}</td>
                                    <td>{p.defensa}</td>
                                    <td>{p.velocidad}</td>
                                    <td>{p.pase}</td>
                                    <td>{p.remate}</td>
                                    <button onClick={()=>removePlayer(p.id)} className="button--remove">Quitar</button> 
                                </tr>
                           
                        )}
                </table>
                <button onClick={()=>balanceTeams()} className="button-balance">Balancear</button>
            </div>
            <h4>Equipos</h4>
            <div className="teams">
                <div className="team">
                    <h4>Equipo 1</h4>
                    {team1.map(p => (
                    <h5 key={p.id}>{p.nombre}</h5>
                    ))}
                </div>
                <div className="team">
                    <h4>Equipo 2</h4>
                    {team2.map(p => (
                    <h5 key={p.id}>{p.nombre}</h5>
                    ))}
                </div>
            </div>
        </>
    )
}