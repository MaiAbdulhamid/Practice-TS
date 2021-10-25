import { useReducer } from "react"
import { Container } from "../Container"

type CounterState = {
  count: number
}

// discriminated unions
type UpdateAction = {
  type: 'increment' | 'decrement'
  payload: number
}
type ResetAction = {
  type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch(action.type){
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}
export const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  return(
    <>
    <Container styles={{border: '1px solid #eee', padding: '1rem'}}>
      <p>
        Count is: {state.count}
      </p>
      <button onClick={() => dispatch({type: 'increment', payload: 10})}>
        Increment
      </button>
      <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
        Decrement
      </button>
      {/* Reset Action doesn't need a payload */}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
    </Container>

    </>
  )
}