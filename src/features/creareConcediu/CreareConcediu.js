import React, { Fragment } from 'react'
import { Grid, FormLabel, Container } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import DatePickerIncepere from './DatePickerIncepere'
import DatePickerIncetare from './DatePickerIncetare'
import ComboBoxTipConcediu from './ComboBoxTipConcediu'
import ComboBoxInlocuitor from './ComboBoxInlocuitor'
import { makeStyles } from '@material-ui/core/styles'
import CreareConcediuCSS from './CreareConcediuCSS'
import { Table } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHeader } from 'providers/AreasProvider'
import { useReducer } from 'react'
import { initialState, reducer } from './CreareConcediuState'

const useStyles = makeStyles(CreareConcediuCSS)

function CreareConcediu() {
  const classes = useStyles()
  const [localState, dispatch] = useReducer(reducer, initialState)
  const handleChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }
  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Adauga un concediu nou'}
    </div>
  )

  return (
    <Fragment>
      <Container className={classes.container} maxWidth='sm'>
        <div style={{ marginLeft: '70px', marginTop: '1rem', marginBottom: '1rem' }}>
          <ComboBoxTipConcediu
            className={classes.combobox}
            onChange={event => handleChange('ComboboxTipConcediu', event.target.value)}
          ></ComboBoxTipConcediu>
        </div>
        <div className={classes.datePicker}>
          <DatePickerIncepere onChange={event => handleChange('DatePickerIncepere', event.target.value)}></DatePickerIncepere>
          <DatePickerIncetare onChange={event => handleChange('DatePickerIncetare', event.target.value)}></DatePickerIncetare>
        </div>
        <div>
          <TextField
            disabled
            className={classes.TextField}
            id='filled-disabled'
            label='Numar de zile selectat'
            variant='filled'
            onChange={event => handleChange('NumarZileSelectat', event.target.value)}
          />

          <TextField
            disabled
            className={classes.TextField}
            id='filled-disabled'
            label='Numar zile disponibile'
            variant='filled'
            onChange={event => handleChange('NumarZileDisponibile', event.target.value)}
          />
        </div>

        <div style={{ marginLeft: '70px', marginTop: '1rem' }}>
          <ComboBoxInlocuitor onChange={event => handleChange('ComboboxInlocuitor', event.target.value)}></ComboBoxInlocuitor>
        </div>
        <br></br>
        <div style={{ marginLeft: '120px' }}>
          <TextField
            id='outlined-multiline-static'
            label='Comentarii'
            onChange={event => handleChange('Comentarii', event.target.value)}
            multiline
            rows={4}
            variant='outlined'
          />
        </div>

        <button className={classes.StyleBtn} align='center' variant='contained' color='primary' size='large'>
          {' '}
          ADAUGA
        </button>
      </Container>
    </Fragment>
  )
}

export default CreareConcediu
