import * as React from 'react'
import { Autocomplete } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import InputLabel from '@mui/material/InputLabel'
import { TextField } from '@material-ui/core'
import { useReducer } from 'react'
import { initialState, reducer } from './PromovareStateDefine'

const useStyles = makeStyles(stilAngajati)

export default function DropDownEchipa() {
  const ListaEchipe = [
    { id: 1, nume: 'IT' },
    { id: 1, nume: 'Resurse Umane' },
    { id: 1, nume: 'Support' },
    { id: 1, nume: 'Markeing' },
    { id: 1, nume: 'Dezvoltare' }
  ]
  const [dispatch] = useReducer(reducer, initialState)

  //functie pt autocomplete pt retinere info selectata
  const handleChange = (propertyName, value) => {
    dispatch({ inputName: 'OnPropertyChanged', propertyName, value })
  }
  const stilPromovare = useStyles()
  return (
    <div>
      <div className={stilPromovare.divSelect}>
        <InputLabel id='demo-simple-select-autowidth-label'>Alege echipa</InputLabel>
        <Autocomplete
          id='combo-box-echipe'
          options={ListaEchipe}
          className={stilPromovare.Combobox}
          onChange={(event, value => handleChange('Echipa', value))}
          getOptionLabel={option => option.nume}
          renderInput={params => <TextField {...params} label='Echipa' variant='outlined' />}
        />
      </div>
    </div>
  )
}
