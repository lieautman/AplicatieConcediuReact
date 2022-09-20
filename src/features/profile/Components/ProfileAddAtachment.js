import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types'



function ProfileAddAtachment(props) {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <Fab className={props.idDat} color="primary" aria-label="add">
        <AddIcon />
    </Fab>
  )
}
ProfileAddAtachment.propTypes = {
  idDat: PropTypes.string.isRequired
}
export default ProfileAddAtachment
