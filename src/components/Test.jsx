import React from 'react'
import { useState } from 'react'

const Test = () => {
    const [players, setPlayers] = useState([
        {
        name: 'awais', role: 'surv', hp: 2
    },
    {
        name: 'siawa', role: 'surv', hp: 2
    },
    {
        name: 'iawsa', role: 'killer', hp: 2
    }
    
])

const dmg = (index) => {
let temp = [...players]
temp[index].hp = temp[index].hp - 1

setPlayers(temp)
}
  return (
    <div>
      {players.map((player, index) => (
        <div key={player.name}>
        <h1>{player.name}, health is: {player.hp}</h1>
        <button onClick={() => dmg(index)}> Take one Health</button>
        </div>
      ))}
    </div>
  )
}

export default Test
