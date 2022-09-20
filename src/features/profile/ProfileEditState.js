import React, { Fragment, useReducer}from 'react'
import {initialState, reducer} from './ProfileStateDefine'

import ProfileEdit from './ProfileEdit'


//css

function ProfileEditState() {
  //css
  const [state, dispatch] = useReducer(reducer, initialState);

  function modifyDataProfile(inputName, inputValue){
    dispatch({inputName, inputValue})
  }

  return (
    <>
    <ProfileEdit
      stare={state}
      modifyDataProfile= {modifyDataProfile}
    ></ProfileEdit>
  </>
  )
}


export default ProfileEditState