import { useRef, useEffect } from "react";

export const DomRef = () => {
  const InputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    InputRef.current.focus()
  }, [])

  return ( <input type='text' ref={InputRef} />)
}