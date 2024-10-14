import { createContext, ReactNode, useState } from "react";
import { Player, PlayerContextType } from "../models/player";


export const PlayersContext = createContext< PlayerContextType | undefined>(undefined)

export const PlayersProvider = ({ children }: { children: ReactNode }) => {
    const [players, setPlayers] = useState<Player[]>(() => {
        const storedPlayers = localStorage.getItem('jugadores');
        return storedPlayers ? JSON.parse(storedPlayers) : [];
    });

    // Función para agregar un jugador
    const addPlayer = (player: Player): void => {
        const updatedPlayers = [...players, player];
        setPlayers(updatedPlayers);
        localStorage.setItem('jugadores', JSON.stringify(updatedPlayers));
    };

    return (
        <PlayersContext.Provider value={{ players, addPlayer }}>
            {children}
        </PlayersContext.Provider>
    );
};