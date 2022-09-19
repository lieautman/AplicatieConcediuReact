import React, { Fragment } from 'react'
import { Typography, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Adauga_Angajatcss from './Adauga_Angajatcss'
import { Autocomplete } from '@material-ui/lab'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(Adauga_Angajatcss)

function Adauga_Angajat() {
  const classes = useStyles()
  const ListaManageri = ['Mihai', 'Maria', 'Bogan']
  const ListaEchipe = ['IT', 'HR', 'Support']

  return (
    <Fragment>
      <div className={classes.containeradaugaaangajat}>
        <Typography>Adauga Angajat</Typography>
        <Container className maxWidth='sm'>
          <div>
            <label className={classes.containeradaugaaangajat}>{'Adauga un angajat nou'}</label>
            <div>
              <TextField label={'Nume'}></TextField>
            </div>
            <div>
              <TextField label={'Prenume'}></TextField>
            </div>

            <div>
              <TextField
                id='date'
                label='Data Nasterii'
                type='date'
                defaultValue='2022-09-24'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />{' '}
            </div>
            <div>
              <TextField label={'CNP'}></TextField>
            </div>
            <div>
              <TextField label={'Seria Numar CI'}></TextField>
            </div>
            <div>
              <TextField label={'Numar de telefon'}></TextField>
            </div>
            <div>
              <TextField label={'Salariu'}></TextField>
            </div>

            <div>
              <TextField
                id='date'
                label='Data Angajarii'
                type='date'
                defaultValue='2022-09-24'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />{' '}
            </div>
            <div>
              <Autocomplete
                disable
                portal
                id='combo-box-manageri'
                options={ListaManageri}
                // getOptionLabel={option => option.title}

                renderInput={params => <TextField {...params} label='Lista de Mangeri' />}
              />
            </div>
            <div>
              <Autocomplete
                disable
                portal
                id='combo-box-echipe'
                options={ListaEchipe}
                // getOptionLabel={option => option.title}

                renderInput={params => <TextField {...params} label='Lista de Echipe' />}
              />
            </div>
          </div>
        </Container>
        <div>
          <button className={classes.StyleBtn} variant='contained' size='large'>
            Adauga
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Adauga_Angajat
