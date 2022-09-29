import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import INLOCUITOR_QUERY from './QueryInlocuitor'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

const ComboBoxInlocuitor = () => {
  // Our sample dropdown options

  const { data } = useQueryWithErrorHandling(INLOCUITOR_QUERY)

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
        options={data?.inlocuitoriData}
        style={{ width: 380 }}
        getOptionLabel={data => data?.nume}
        renderInput={params => <TextField {...params} label='Selecteaza un inlocuitor' variant='outlined' />}
      />
    </div>
  )
}
export default ComboBoxInlocuitor
