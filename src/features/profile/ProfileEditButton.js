import React from 'react'
import Edit from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'



function ProfileEditButton(props) {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <Button> <Edit className = {props.idDat}/></Button>
  )
}
ProfileEditButton.propTypes = {
  idDat: PropTypes.object.isRequired
}
export default ProfileEditButton