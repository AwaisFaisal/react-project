
import { useDmg } from '../playerState/useDmg.jsx'

const Board = () => {
    const [hp, dmg, heal, hpUp] = useDmg(2);
    const players =[{
        name: 'awais',
        role: 'surv',
        hp: hp
    },
    {
        name: 'siawa',
        role: 'surv',
        hp: hp
    },
    {
        name: 'iawsa',
        role: 'killer',
        hp: hp
    },
    
]
  return (
    <div>
        {players.map((player => (
        <div>
        <h1 key={player.name}> player is {player.name}, his role is {player.role}. HP:{player.hp}</h1>
        <button onClick={() => dmg(player.hp)}>Deal dmg to {player.name}</button>
        <button onClick={() => heal(player.hp)}>Heal {player.name}</button>
        <button onClick={() => hpUp(player)}>Upgrade hp for {player.name}</button>
        </div>
)))}
        
        
        
  
    </div>
  )
}

export default Board
