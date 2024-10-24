import { useContext, useState } from "react";
import { Player } from "../../../../models/player"
import './cardPlayer.css'
import { PlayersContext } from "../../../../context/PlayersContext";
interface CardPlayerProps {
    player: Player;
}



export const CardPlayerComponent = ({player}:CardPlayerProps) => {
    const [selectedPlayer, setSelectPlayer] = useState<Player>()
    const context = useContext(PlayersContext)
    function ModalDeleteCard() {
        setSelectPlayer(player)
        console.log(selectedPlayer);
    }
    function deletePlayer(){
        if(selectedPlayer){
            context?.deletePlayer(selectedPlayer.id)
        }
    }
    return(
        <>
            <div className="modal fade" id={`deleteModal-${player.id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Desea borrar a {selectedPlayer?.nombre}?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={deletePlayer} data-bs-dismiss="modal" aria-label="Close">Eliminar</button>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="cardPlayer">
                <h2>{player.nombre}</h2>
                <p>Velocidad: {player.velocidad}</p>
                <p>Pase: {player.pase}</p>
                <p>Remate: {player.remate}</p>
                <p>Defensa: {player.defensa}</p>
                <div className="cardPlayer--buttons">
                    <button className="cardPlayer--buttons__element">editar</button>
                    <button className="cardPlayer--buttons__element" onClick={ModalDeleteCard}  data-bs-toggle="modal" data-bs-target={`#deleteModal-${player.id}`}>borrar</button>
                </div>
            </div>
        </>
    )
}