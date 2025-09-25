import React, { useReducer } from 'react'

const initState = {
    count: 0
}

function reducerFunc(state, action){
    switch (action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return {count: 0}
        default:
            throw new Error();
    }

}

function Ureducer() {
    const [state, dispatch] = useReducer(reducerFunc, initState);
  return (
    <div>
        <p><strong>Count: </strong> {state.count} </p>
        <button onClick={() => dispatch({type:'increment'})}>+</button>
        <button onClick={() => dispatch({type:'decrement'})}>-</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Ureducer