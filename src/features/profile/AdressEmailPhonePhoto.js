import React from 'react'
import Person from '@material-ui/icons/Person'
import PropTypes from 'prop-types'



function AdressEmailPhonePhoto(props) {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <div> <Person className = {props.idDat}/></div>
  )
}
AdressEmailPhonePhoto.propTypes = {
  idDat: PropTypes.string.isRequired
}
export default AdressEmailPhonePhoto
