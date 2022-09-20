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
      <Container className={classes.containeradaugaaangajat} maxWidth='sm'>
        <div className={classes.containeradaugaaangajat}>
          <Grid>
            <Container className={classes.containeradaugaangajatleft} maxWidth='sm'>
              <div>
                <TextField className={classes.TextField} label={'Nume'}></TextField>
                <br></br>
                <TextField label={'Prenume'}></TextField>
                <br></br>
                <TextField
                  id='date'
                  label='Data Nasterii'
                  type='date'
                  defaultValue='yyyy-dd-mm'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                />{' '}
                <br></br>
                <TextField label={'CNP'}></TextField>
                <br></br>
                <TextField label={'Seria Numar CI'}></TextField>
                <br></br>
              </div>
            </Container>
          </Grid>

          <Grid>
            <Container className={classes.containeradaugaangajatright} maxWidth='sm'>
              <div>
                <TextField label={'Numar de telefon'}></TextField>
                <br></br>
                <TextField label={'Salariu'}></TextField>
                <br></br>
                <TextField
                  id='date'
                  label='Data Angajarii'
                  type='date'
                  defaultValue='yyyy-dd-mm'
                  className={classes.textField}
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
                  // getOptionLabel={option => option.title}

                  renderInput={params => <TextField {...params} label='Lista de Echipe' />}
                />
                <Autocomplete
                  disable
                  portal
                  id='combo-box-manageri'
                  options={ListaManageri}
                  // getOptionLabel={option => option.title}

                  renderInput={params => <TextField {...params} label='Lista de Mangeri' />}
                />
              </div>
            </Container>
          </Grid>
        </div>
      </Container>
      <button className={classes.StyleBtn} variant='contained' size='large'>
        Adauga
      </button>
    </Fragment>
  )
}

export default Adauga_Angajat
