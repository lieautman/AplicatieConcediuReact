import React, { useReducer } from 'react'
import Promovare from './Promovare'
import { initialState, reducer } from './ProfileStateDefine'

//state management
function PromovareState() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Promovare state={state} dispatch={dispatch}></Promovare>
    </>
  )
}

export default PromovareState
