import { useState } from "react"

export const useDmg = () => {
  const [hp, setHp] = useState(hp)

  const dmg = (health) => {
    if (hp > 0){
    setHp(health - 1)
    console.log("dmg");
  }}
  const heal = () => {
    if (hp < 2) {
    setHp(hp + 1)
    console.log("heal");
  }}
  const hpUp = () => {
    setHp(3)
    console.log("setHp");
  }

  return [hp, dmg, heal, hpUp]
}


