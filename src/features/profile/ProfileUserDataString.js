import React, { Fragment } from 'react'
import PropTypes from 'prop-types'



function ProfileUserDataString(props) {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <Fragment>
    <div className={props.idDat}>{props.text}</div>
    </Fragment>
  )
}
ProfileUserDataString.propTypes = {
  text: PropTypes.object.isRequired,
  idDat: PropTypes.object.isRequired,
}
export default ProfileUserDataString
