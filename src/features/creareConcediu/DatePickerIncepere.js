import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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

export default function DatePicker() {
  const classes = useStyles()

  return (
    <>
      <div initialmonth={new Date(2017, 3)} disableddays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]} />
      <form className={classes.container} noValidate>
        <TextField
          id='date'
          label='Selectati data de incepere'
          type='date'
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    </>
  )
}
