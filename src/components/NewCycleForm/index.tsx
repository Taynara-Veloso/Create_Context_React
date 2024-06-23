import { useContext } from "react";
import { CyclesContext } from "../../App";
import styles from "./styles.module.css"

export function NewCycleForm(){
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <div className={styles.wrapper}>
      <h1>NewCycleForm: {activeCycle}
        <button type="button" title="button" 
          onClick={() => {
            setActiveCycle(1)
          }}
        >
          Alterar ciclo ativo
        </button>
      </h1>
    </div>
  )
}