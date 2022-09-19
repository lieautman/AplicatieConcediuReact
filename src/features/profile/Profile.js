import React, { Fragment } from 'react'

import ProfilePhoto from './ProfilePhoto.js'
import ProfileUserData from './ProfileUserData.js'

function Profile() {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <Fragment>
      <ProfilePhoto></ProfilePhoto>
      <ProfileUserData></ProfileUserData>
    </Fragment>
  )
}

export default Profile
