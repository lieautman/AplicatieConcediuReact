import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



function ProfileAddAtachment() {
 //const addToast = useToast()
 // addToast('Welcome', 'success')
  return (
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
  )
}

export default ProfileAddAtachment
