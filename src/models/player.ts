import { statistics } from "./types";

export interface Player {
    id:string;
    nombre: string;
    velocidad: statistics;
    pase:statistics;
    remate: statistics;
    defensa: statistics
}

export interface PlayerContextType{
    players: Player[];
    addPlayer: (player:Player) => void
    deletePlayer:(playerId:string) => void
}

