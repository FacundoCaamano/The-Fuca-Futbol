
import { useContext } from 'react'
import './Modal.css'
import { PlayersContext } from '../../../context/PlayersContext'
import { generateId } from '../../../utils/idGenerator';
export const ModalComponent=()=>{
    const context = useContext(PlayersContext);
    if (!context) {
        // Manejo del caso cuando el contexto es undefined
        return <div>Error: Contexto no encontrado</div>;
    }
    const { addPlayer } = context;
    function formSubmit(event:any):void{
        event?.preventDefault()
        
        const newPlayer={
            id: generateId(),
            nombre:event?.target.namePlayer.value,
            velocidad:event?.target.velocidad.value,
            pase:event?.target.pase.value,
            remate:event?.target.remate.value,
            defensa:event?.target.defensa.value
        }
        
        addPlayer(newPlayer)
    }
    
    return(
        <>
            <div className="modal fade" id="modalNewPlayer"  aria-labelledby="modalNewPlayer" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className='form' onSubmit={formSubmit}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Jugador</h1>
                                <button type="button" className="button-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                            </div>
                            <div className="modal-body">
                                <label >Nombre</label>
                                <input 
                                    type="text"
                                    name='namePlayer' 
                                    />
                                <div className='form--statistics'>
                                    <label >Velocidad</label>
                                    <select defaultValue="Media" name="velocidad" id="">
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="Muy baja">Muy baja</option>
                                    </select>
                                    <label >Pase</label>
                                    <select defaultValue="Media" name="pase" id="">
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="Muy baja">Muy baja</option>
                                    </select>
                                    <label >Remate</label>
                                    <select defaultValue="Media" name="remate" id="">
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="Muy baja">Muy baja</option>
                                    </select>
                                    <label >Defensa</label>
                                    <select defaultValue="Media" name="defensa" id="">
                                        <option value="Goat">Goat</option>
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                        <option value="Muy baja">Muy baja</option>
                                    </select>
                                </div>
                            </div>
                        <div className="modal-footer">
                            <button type='submit' className="btn btn-success">Crear</button>
                         </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}