import React, { Fragment } from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Adauga_Angajatcss from './Adauga_Angajatcss'
import { Autocomplete } from '@material-ui/lab'

const useStyles = makeStyles(Adauga_Angajatcss)
const ListaEchipe = ['IT', 'HR', 'Support']
const ListaManageri = ['Mihai', 'Maria', 'Bogan']

function Adauga_Angajat() {
  const classes = useStyles()
  return (
    <Fragment>
      <label className={classes.StyleTxt}> {'Adauga un angajat nou'}</label>
      <br></br>
      <Container className={classes.containeradaugaaangajat} maxWidth='sm'>
        <Grid>
          <Container className={classes.containeradaugaangajatleft} maxWidth='sm'>
            <div>
              <TextField className={classes.TextField} label={'Nume'} variant='outlined'></TextField>
              <br></br>
              <TextField className={classes.TextField} label={'Prenume'} variant='outlined'></TextField>
              <br></br>
              <TextField
                id='date'
                label='Data Nasterii'
                variant='outlined'
                type='date'
                defaultValue='yyyy-dd-mm'
                className={classes.Combobox}
                InputLabelProps={{
                  shrink: true
                }}
              />{' '}
              <br></br>
              <TextField className={classes.TextField} label={'CNP'} variant='outlined'></TextField>
              <br></br>
              <TextField className={classes.TextField} label={'Seria Numar CI'} variant='outlined'></TextField>
              <br></br>
            </div>
          </Container>
        </Grid>

        <Grid>
          <Container className={classes.containeradaugaangajatright} maxWidth='sm'>
            <div>
              <TextField className={classes.TextField} label={'Numar de telefon'} variant='outlined'></TextField>
              <br></br>
              <TextField className={classes.TextField} label={'Salariu'} variant='outlined'></TextField>
              <br></br>
              <TextField
                id='date'
                label='Data Angajarii'
                variant='outlined'
                type='date'
                defaultValue='yyyy-dd-mm'
                className={classes.Combobox}
                InputLabelProps={{
                  shrink: true
                }}
              />{' '}
              <br></br>
              <Autocomplete
                disable
                portal
                id='combo-box-echipe'
                options={ListaEchipe}
                className={classes.Combobox}
                // getOptionLabel={option => option.title}

                renderInput={params => <TextField {...params} label='Echipa' variant='outlined' />}
              />
              <Autocomplete
                disable
                portal
                id='combo-box-manageri'
                options={ListaManageri}
                className={classes.Combobox}
                // getOptionLabel={option => option.title}

                renderInput={params => <TextField {...params} label='Mangeri' variant='outlined' />}
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
