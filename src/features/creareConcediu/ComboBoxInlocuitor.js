import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

const ComboBoxInlocuitor = () => {
  // Our sample dropdown options
  const options = [
    { id: 1, name: 'Popescu Ioan' },
    { id: 2, name: 'Dragomir Iustina' },
    { id: 3, name: 'Calinescu Mihai' }
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
        style={{ width: 380 }}
        getOptionLabel={option => option.name}
        renderInput={params => <TextField {...params} label='Selecteaza un inlocuitor' variant='outlined' />}
      />
    </div>
  )
}
export default ComboBoxInlocuitor
