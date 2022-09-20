import React, {useReducer} from 'react'
import Profile from './Profile'
import {initialState, reducer} from './ProfileStateDefine'

//state management
function ProfileState() {
  const [state] = useReducer(reducer, initialState);

  return (
    <>
      <Profile
        stare={state}
      ></Profile>
    </>
  )
}

export default ProfileState
