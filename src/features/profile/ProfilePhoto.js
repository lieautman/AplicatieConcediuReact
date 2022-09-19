import React from 'react'
import Person from '@material-ui/icons/Person'
import PropTypes from 'prop-types'



function ProfilePhoto(props) {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <div> <Person className = {props.idDat}/></div>
  )
}
ProfilePhoto.propTypes = {
  idDat: PropTypes.string.isRequired
}
export default ProfilePhoto
