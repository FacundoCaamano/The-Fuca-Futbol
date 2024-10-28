import { useState } from "react"
import { Player, STATISTICS_VALUE } from "../models/player"

export const userTeamBalanced = () =>{
    const [players, setPlayer]=useState<Player[]>([])
    const [team1, setTeam1] = useState<Player[]>([])
    const [team2, setTeam2] = useState<Player[]>([])

    const addPlayer = (player:Player) =>{
        setPlayer(prevState => [...prevState, player])
    }

    const removePlayer = (playerId:string)=>{
        const playersFilter= players.filter(p => p.id !== playerId)
        setPlayer(playersFilter)  
    }

    const calculateScore = (player: Player): number => {
        return (
            STATISTICS_VALUE[player.velocidad] +
            STATISTICS_VALUE[player.pase] +
            STATISTICS_VALUE[player.remate] +
            STATISTICS_VALUE[player.defensa]
        );
    };

    const balanceTeams = () => {
        const sortPlayer = [...players].sort((a,b)=> calculateScore(b) - calculateScore(a))
        const team1: Player[] = []
        const team2: Player[] = []

        let team1Score = 0;
        let team2Score = 0;

        for (const player of sortPlayer){
            const playerScore = calculateScore(player)
            if(team1Score <= team2Score){
                team1.push(player)
                team1Score += playerScore
            }else{
                team2.push(player)
                team2Score += playerScore
            }
        }

        setTeam1(team1)
        setTeam2(team2)

    }

    return {
        players,
        addPlayer,
        removePlayer,
        team1,
        team2,
        balanceTeams
    };
}