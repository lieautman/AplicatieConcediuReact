import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Adauga_Angajatcss from './Adauga_Angajatcss'
import PropTypes from 'prop-types'

// import { useReducer } from 'react'
// import { initialState, reducer } from './Adauga_AngajatState'
// import Adauga_Angajat from './Adauga_Angajat'

const useStyles = makeStyles(Adauga_Angajatcss)
export function AdaugaAngajatComp1(props) {
  const classes = useStyles()
  const { handleChange } = props
  const { localState } = props

  return (
    <Grid>
      <Container className={classes.containeradaugaangajatleft} maxWidth='sm'>
        <div>
          <TextField
            className={classes.TextField}
            label={'Nume'}
            variant='outlined'
            value={localState.nume}
            onChange={event => handleChange('nume', event.target.value)}
          ></TextField>
          <br></br>
          <TextField
            className={classes.TextField}
            label={'Prenume'}
            variant='outlined'
            value={localState.prenume}
            onChange={event => handleChange('prenume', event.target.value)}
          ></TextField>
          <br></br>
          <TextField
            id='date'
            label='DataNasterii'
            variant='outlined'
            type='date'
            value={localState.dataNasterii}
            onChange={event => handleChange('dataNasterii', event.target.value)}
            className={classes.Combobox}
            InputLabelProps={{
              shrink: true
            }}
          />{' '}
          <br></br>
          <TextField
            className={classes.TextField}
            label={'CNP'}
            variant='outlined'
            value={localState.cnp}
            onChange={event => handleChange('cnp', event.target.value)}
          ></TextField>
          <br></br>
          <TextField
            className={classes.TextField}
            label={'SeriaNumarCI'}
            variant='outlined'
            value={localState.seriaNumarCI}
            onChange={event => handleChange('seriaNumarCI', event.target.value)}
          ></TextField>
          <br></br>
        </div>
      </Container>
    </Grid>
  )
}
AdaugaAngajatComp1.propTypes = {
  handleChange: PropTypes.func,
  localState: PropTypes.object
}
