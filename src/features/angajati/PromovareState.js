import React, { useReducer } from 'react'
import Promovare from './Promovare'
import { initialState, reducer } from './ProfileStateDefine'

//state management
function PromovareState() {
  const [state] = useReducer(reducer, initialState)

  return (
    <>
      <Promovare stare={state}></Promovare>
    </>
  )
}

export default PromovareState
