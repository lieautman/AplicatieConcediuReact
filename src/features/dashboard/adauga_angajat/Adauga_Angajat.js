import React, { Fragment } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Adauga_Angajatcss from './Adauga_Angajatcss'
import { Autocomplete } from '@material-ui/lab'
import { useHeader } from 'providers/AreasProvider'
import { useReducer } from 'react'
import { initialState, reducer } from './Adauga_AngajatState'

const useStyles = makeStyles(Adauga_Angajatcss)

const ListaEchipe = ['IT', 'HR', 'Support']
const ListaManageri = ['Mihai', 'Maria', 'Bogdan']

function Adauga_Angajat() {
  const classes = useStyles()
  const [localState, dispatch] = useReducer(reducer, initialState)
  const handleChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }

  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Adauga un angajat nou'}
    </div>
  )
  return (
    <Fragment>
      <br></br>
      <Container className={classes.containeradaugaaangajat} maxWidth='sm'>
        <Grid>
          <Container className={classes.containeradaugaangajatleft} maxWidth='sm'>
            <div>
              <TextField
                className={classes.TextField}
                label={'Nume'}
                variant='outlined'
                onChange={event => handleChange('Nume', event.target.value)}
              ></TextField>
              <br></br>
              <TextField
                className={classes.TextField}
                label={'Prenume'}
                variant='outlined'
                onChange={event => handleChange('Prenume', event.target.value)}
              ></TextField>
              <br></br>
              <TextField
                id='date'
                label='DataNasterii'
                variant='outlined'
                type='date'
                defaultValue='yyyy-dd-mm'
                onChange={event => handleChange('DataNasterii', event.target.value)}
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
                onChange={event => handleChange('CNP', event.target.value)}
              ></TextField>
              <br></br>
              <TextField
                className={classes.TextField}
                label={'SeriaNumarCI'}
                variant='outlined'
                onChange={event => handleChange('SeriaNumarCI', event.target.value)}
              ></TextField>
              <br></br>
            </div>
          </Container>
        </Grid>

        <Grid>
          <Container className={classes.containeradaugaangajatright} maxWidth='sm'>
            <div>
              <TextField
                className={classes.TextField}
                label={'Numardetelefon'}
                variant='outlined'
                onChange={event => handleChange('Numardetelefon', event.target.value)}
              ></TextField>
              <br></br>
              <TextField
                className={classes.TextField}
                label={'Salariu'}
                variant='outlined'
                onChange={event => handleChange('Salariu', event.target.value)}
              ></TextField>
              <br></br>
              <TextField
                id='date'
                label='DataAngajarii'
                variant='outlined'
                type='date'
                defaultValue='yyyy-dd-mm'
                onChange={event => handleChange('DataAngajarii', event.target.value)}
                className={classes.Combobox}
                InputLabelProps={{
                  shrink: true
                }}
              />{' '}
              <br></br>
              <Autocomplete
                id='combo-box-echipe'
                options={ListaEchipe}
                className={classes.Combobox}
                onChange={event => handleChange('Echipa', event.target.value)}
                // getOptionLabel={option => option.title}

                renderInput={params => <TextField {...params} label='Echipa' variant='outlined' />}
              />
              <Autocomplete
                id='combo-box-manageri'
                options={ListaManageri}
                className={classes.Combobox}
                onChange={event => handleChange('Manager', event.target.value)}
                // getOptionLabel={option => option.title}

                renderInput={params => <TextField {...params} label='Manger' variant='outlined' />}
              />
            </div>
          </Container>
        </Grid>
      </Container>
      <button className={classes.StyleBtn} variant='contained' size='large'>
        Adauga
      </button>
    </Fragment>
  )
}

export default Adauga_Angajat
