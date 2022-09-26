import React, { useReducer } from 'react'
import ProfileTabelConcedii from './ProfileTabelConcedii'
import { initialState, reducer } from './ProfileTabelConcediiStateDefine'
import PropTypes from 'prop-types'

function ProfileTabelConcediiState(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProfileTabelConcedii
      emailUtilizator={props.emailUtilizator}
      idDat={props.idDat}
      idDivButoane={props.idDivButoane}
      idDatButonInainte={props.idDatButonInainte}
      idPagLabel={props.idPagLabel}
      idDatButonInapoi={props.idDatButonInapoi}
      state={state}
      dispatch={dispatch}
    ></ProfileTabelConcedii>
  )
}
ProfileTabelConcediiState.propTypes = {
  emailUtilizator: PropTypes.string.isRequired,
  idDat: PropTypes.string.isRequired,
  idDivButoane: PropTypes.string.isRequired,
  idDatButonInainte: PropTypes.string.isRequired,
  idPagLabel: PropTypes.string.isRequired,
  idDatButonInapoi: PropTypes.string.isRequired
}
export default ProfileTabelConcediiState
