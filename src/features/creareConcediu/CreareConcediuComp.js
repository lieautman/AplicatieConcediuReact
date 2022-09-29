import React, { Fragment } from 'react'
import DatePickerIncepere from './DatePickerIncepere'
import DatePickerIncetare from './DatePickerIncetare'
import ComboBoxTipConcediu from './ComboBoxTipConcediu'
import ComboBoxInlocuitor from './ComboBoxInlocuitor'
import { makeStyles } from '@material-ui/core/styles'
import CreareConcediuCSS from './CreareConcediuCSS'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const useStyles = makeStyles(CreareConcediuCSS)
function CreareConcediuComp(props) {
  const classes = useStyles()
  const { handleChange } = props
  const { localState } = props

  return (
    <>
      <div style={{ marginLeft: '70px', marginTop: '1rem', marginBottom: '1rem' }}>
        <ComboBoxTipConcediu
          className={classes.combobox}
          onChange={(event, value) => handleChange('tipConcediuId', value)}
        ></ComboBoxTipConcediu>
      </div>
      <div className={classes.datePicker}>
        <DatePickerIncepere
          onChange={event => handleChange('datePickerIncepere', event.target.value)}
          value={localState.DatePickerIncepere}
        ></DatePickerIncepere>
        <DatePickerIncetare
          onChange={event => handleChange('datePickerIncetare', event.target.value)}
          value={localState.DatePickerIncetare}
        ></DatePickerIncetare>
      </div>
      <div>
        <TextField
          disabled
          className={classes.TextField}
          id='filled-disabled'
          label='Numar de zile selectat'
          value={localState.numarZileSelectat}
          variant='filled'
          onChange={event => handleChange('numarZileSelectat', event.target.value)}
        />

        <TextField
          disabled
          className={classes.TextField}
          id='filled-disabled'
          label='Numar zile disponibile'
          value={localState.numarZileDisponibile}
          variant='filled'
          onChange={event => handleChange('numarZileDisponibile', event.target.value)}
        />
      </div>

      <div style={{ marginLeft: '70px', marginTop: '1rem' }}>
        <ComboBoxInlocuitor handleChange={handleChange} localState={localState}></ComboBoxInlocuitor>
      </div>
      <br></br>
      <div style={{ marginLeft: '150px' }}>
        <TextField
          id='outlined-multiline-static'
          label='Comentarii'
          value={localState.comentarii}
          onChange={event => handleChange('comentarii', event.target.value)}
          multiline
          rows={4}
          variant='outlined'
        />
      </div>
    </>
  )
}

export default CreareConcediuComp

CreareConcediuComp.propTypes = {
  handleChange: PropTypes.func,
  localState: PropTypes.object
}
