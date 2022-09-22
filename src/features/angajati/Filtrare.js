/* eslint-disable react/react-in-jsx-scope */
import TextField from '@mui/material/TextField'
import react from 'react'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'

const stilAng = makeStyles(stilAngajati)

export default function Filtrare() {
  const stil = stilAng()
  return (
    <div>
      <div className={stil.divMareTextField}>
        <div>
          <TextField id='filled-basic' label='Nume' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Prenume' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Email' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Manager' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Echipa' variant='standard' size='small' />
        </div>
      </div>
    </div>
  )
}
