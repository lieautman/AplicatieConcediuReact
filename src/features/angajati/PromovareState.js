import React, { useReducer } from 'react'
import Promovare from './Promovare'
import { initialState, reducer } from './ProfileStateDefine'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import ANGAJATI_DATA_QUERY from './QueryAngajati'

//state management
function PromovareState() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //query
  const data = useQueryWithErrorHandling(ANGAJATI_DATA_QUERY)

  return (
    <>
      <Promovare state={(state, data)} dispatch={dispatch}></Promovare>
    </>
  )
}

export default PromovareState
