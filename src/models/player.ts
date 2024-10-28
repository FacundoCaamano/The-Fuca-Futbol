import { statistics } from "./types";

export interface Player {
    id:string;
    nombre: string;
    velocidad: statistics;
    pase:statistics;
    remate: statistics;
    defensa: statistics
}

export const STATISTICS_VALUE: { [key in statistics]: number } = {
    "Goat": 5,
    "Alta": 4,
    "Media": 3,
    "Baja": 2,
    "Muy Baja": 1
};

export interface PlayerContextType{
    players: Player[];
    addPlayer: (player:Player) => void
    deletePlayer:(playerId:string) => void
    updatedPlayer:(updatedPlayer:Player) => void
}

