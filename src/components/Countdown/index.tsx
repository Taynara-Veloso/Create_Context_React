import { useContext } from "react"
import { CyclesContext } from "../../App"
import styles from "./styles.module.css"

export function Countdown() {
  const { activeCycle } = useContext(CyclesContext)

  return (
    <div className={styles.wrapper}>
      <h1>Countdown: {activeCycle}</h1>
    </div>
  )
}