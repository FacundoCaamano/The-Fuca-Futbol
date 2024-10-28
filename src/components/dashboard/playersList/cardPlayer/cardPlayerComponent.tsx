import { useContext, useState } from "react";
import { Player } from "../../../../models/player"
import './cardPlayer.css'
import { PlayersContext } from "../../../../context/PlayersContext";
interface CardPlayerProps {
    player: Player;
}



export const CardPlayerComponent = ({player}:CardPlayerProps) => {
    const [isEditingPlayer, setIsEditingPlayer] = useState(false)
    const [editedPlayer, setEditedPlayer] = useState<Player>(player)
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
    function toggleEditMode(){
        setIsEditingPlayer(!isEditingPlayer)
    }
    function handleChange(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>){
        const {name, value} = event.target
        setEditedPlayer(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    function saveChanges(){
        context?.updatedPlayer(editedPlayer)
        setIsEditingPlayer(false)
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
            <div className={isEditingPlayer ? 'cardPlayer--extend' : 'cardPlayer'}>
                {
                    isEditingPlayer ? 
                    <div className="cardPlayer--extend__elements">
                                <div >
                                    <label>Nombre</label>
                                    <input 
                                        type="text"
                                        name='nombre' 
                                        defaultValue={player.nombre}
                                        onChange={handleChange}
                                        required
                                        />
                                </div>
                                <div >
                                    <div>
                                    <label >Velocidad</label>
                                    <select defaultValue={player.velocidad} name="velocidad" id="" onChange={handleChange}>
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="MuyBaja">Muy baja</option>
                                    </select>
                                    </div>
                                    <div>

                                    <label >Pase</label>
                                    <select defaultValue={player.pase} name="pase" id="" onChange={handleChange}>
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="MuyBaja">Muy baja</option>
                                    </select>
                                    </div>
                                    <div>

                                    <label >Remate</label>
                                    <select defaultValue={player.remate} name="remate" id="" onChange={handleChange}>
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="MuyBaja">Muy baja</option>
                                    </select>
                                    </div>
                                    <div>

                                    <label >Defensa</label>
                                    <select defaultValue={player.defensa} name="defensa" id="" onChange={handleChange}>
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="MuyBaja">Muy baja</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="cardPlayer--buttons">
                                <button className="cardPlayer--buttons__element" onClick={toggleEditMode}>{isEditingPlayer ? 'Cancelar' : 'Editar'}</button>
                                <button className="cardPlayer--buttons__element" onClick={ModalDeleteCard}  data-bs-toggle="modal" data-bs-target={`#deleteModal-${player.id}`}>borrar</button>
                                <button className="cardPlayer--buttons__element" onClick={saveChanges}>Guardar</button>
                                </div>
                            </div>
                    : 
                    <div>
                        <h2>{player.nombre}</h2>
                        <p>Velocidad: {player.velocidad}</p>
                        <p>Pase: {player.pase}</p>
                        <p>Remate: {player.remate}</p>
                        <p>Defensa: {player.defensa}</p>
                    <div className="cardPlayer--buttons">
                        <button className="cardPlayer--buttons__element" onClick={toggleEditMode}>{isEditingPlayer ? 'Cancelar' : 'Editar'}</button>
                        <button className="cardPlayer--buttons__element" onClick={ModalDeleteCard}  data-bs-toggle="modal" data-bs-target={`#deleteModal-${player.id}`}>borrar</button>
                    </div>
                    </div>
                }
            </div>
            <div>

            </div>
        </>
    )
}