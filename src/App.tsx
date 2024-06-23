import './App.css'
import { createContext, useState } from 'react'
import { NewCycleForm } from './components/NewCycleForm/index.tsx'
import { Countdown } from './components/Countdown/index.tsx'

interface CyclesContextType {
  activeCycle: number,
  setActiveCycle: React.Dispatch<React.SetStateAction<number>>,
}

export const CyclesContext = createContext({} as CyclesContextType)

export function App(){
  const [ activeCycle, setActiveCycle ] = useState(0)
  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div className='wrapper'>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
