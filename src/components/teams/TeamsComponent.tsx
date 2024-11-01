import { useContext } from "react"
import { PlayersContext } from "../../context/PlayersContext"
import { userTeamBalanced } from "../../hooks/useTeamBalancer"
import './Teams.css'
import { NavLink} from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"

export const TeamsComponent = () =>{
    const context = useContext(PlayersContext)
    const playersContext=context?.players
    const {isDarkMode} = useTheme()
    const {addPlayer,players,removePlayer,balanceTeams,team1,team2,team1Score,team2Score} = userTeamBalanced()
    
    return(
        <>
            
            <div className="players">
            <h3>Selecciona a los participantes</h3>
            {
                playersContext?.length ? 'jugadores ' :
                <div data-bs-toggle="modal" data-bs-target="#modalNewPlayer" className='playersEmpty'>
                    <div>
                        <p>todavía no sé ha creado ningún jugador</p>
                    </div>
                    <NavLink  to='/dashboard'>
                        <div className="LinkDashboard">
                            <p>Crear jugador</p>
                        </div>
                    </NavLink>
                </div>
            }
            
                <div className="players-grid">
                    {playersContext?.map(player => (
                        <div key={player.id} className={isDarkMode ? "player-card dark":"player-card"}>
                            <span>{player.nombre}</span>
                            <button onClick={() => addPlayer(player)} className={players.includes(player) ? 'button-disabled' : 'button-add'} disabled={players.includes(player)} >Agregar</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="playersSelected">
                <h3>Jugadores seleccionados</h3>
                <table>
                    <thead>
                        <tr className={isDarkMode ? "trDark" : "trHead"}>
                            <th>Num</th>
                            <th>nombre</th>
                            <th>Defensa</th>
                            <th>Velocidad</th>
                            <th>Pase</th>
                            <th>remate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(p=> 
                                <tr key={p.id} className={isDarkMode ? 'darkTr' : ''}>
                                    <td>{players.indexOf(p)+1}</td>
                                    <td>{p.nombre}</td>
                                    <td>{p.defensa}</td>
                                    <td>{p.velocidad}</td>
                                    <td>{p.pase}</td>
                                    <td>{p.remate}</td>
                                    <td>
                                    <button onClick={()=>removePlayer(p.id)} className="button--remove">Quitar</button> 
                                    </td>
                                </tr>
                        )}
                        </tbody>
                </table>
                <button onClick={()=>balanceTeams()} className="button-balance">Balancear</button>
            </div>
            <h4 className="equiposTitle">Equipos</h4>
            <div className="teams">
                <div className={isDarkMode ? 'teamDark' : 'team'}>
                    <h4>Equipo 1</h4>
                    {team1.map(p => (
                     
                    <h5 key={p.id}>{p.nombre}</h5>
                      
                    ))}
                    <p>Score {team1Score}</p>
                </div>
                <div className={isDarkMode ? 'teamDark' : 'team'}>
                    <h4>Equipo 2</h4>
                    {team2.map(p => (
                            <h5 key={p.id}>{p.nombre}</h5>
                    ))}
                    <p>Score {team2Score}</p>
                </div>
            </div>
        </>
    )
}