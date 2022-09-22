import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

const ComboBoxTipConcediu = () => {
  // Our sample dropdown options
  const options = [
    { id: 1, name: 'Concediu de odihna' },
    { id: 2, name: 'Concediu fara plata' },
    { id: 3, name: 'Concediu medical' }
  ]

  // eslint-disable-next-line no-unused-vars
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  }))

  return (
    <div>
      <Autocomplete
        options={options}
        style={{ width: 300 }}
        getOptionLabel={option => option.name}
        renderInput={params => <TextField {...params} label='Selecteaza tipul concediului' variant='outlined' />}
      />
    </div>
  )
}

export default ComboBoxTipConcediu
