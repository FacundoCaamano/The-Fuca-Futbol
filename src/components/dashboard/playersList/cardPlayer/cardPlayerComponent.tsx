import { Player } from "../../../../models/player"
import './cardPlayer.css'
interface CardPlayerProps {
    player: Player;
}
export const CardPlayerComponent = ({player}:CardPlayerProps) => {
    return(
        <>
            <div className="cardPlayer">
                <h2>{player.nombre}</h2>
                <p>Velocidad: {player.velocidad}</p>
                <p>Pase: {player.pase}</p>
                <p>Remate: {player.remate}</p>
                <p>Defensa: {player.defensa}</p>
                <div className="cardPlayer--buttons">
                    <button className="cardPlayer--buttons__element">editar</button>
                    <button className="cardPlayer--buttons__element">borrar</button>
                </div>
            </div>
        </>
    )
}