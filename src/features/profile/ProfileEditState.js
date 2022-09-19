import React, { Fragment, useReducer}from 'react'
import {initialState, reducer} from './ProfileStateDefine'

import ProfileEdit from './ProfileEdit'


//css

function ProfileEditState() {
  //css
  const [state, dispatch] = useReducer(reducer, initialState);

  function modifyDataProfile(){
    
  }

  return (
    <>
    <ProfileEdit
      stare={state}
    ></ProfileEdit>
  </>
  )
}


export default ProfileEditState