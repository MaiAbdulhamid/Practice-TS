import { useState, useEffect, useRef } from "react";

export const MutableRef =  () => {
  const [timer, setTimer] = useState(0)
  const InterValRef = useRef<number | undefined>(undefined)

  const stopTimer = () => {
    window.clearInterval(InterValRef.current)
  }

  useEffect(() => {
    InterValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () =>{
      stopTimer()
    }
  }, [])

  return (<div>
    Timer : {timer}
    <button onClick={() => stopTimer()}></button>
  </div>)
}