import React, { Fragment, useReducer}from 'react'

import { makeStyles } from '@material-ui/core'
import profileStyle from './ProfileCss'

import {initialState, reducer} from './ProfileStateDefine'

//css
const useStyles = makeStyles(profileStyle)

function ProfileEdit() {
  //css
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
        <div>sal</div>
    </Fragment>
  )
}


export default ProfileEdit