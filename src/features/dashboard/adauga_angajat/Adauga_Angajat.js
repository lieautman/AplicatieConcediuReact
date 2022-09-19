import React, { Fragment } from 'react'
import { Typography, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Adauga_Angajatcss from './Adauga_Angajatcss'

const useStyles = makeStyles(Adauga_Angajatcss)

function Adauga_Angajat() {
  const classes = useStyles()
  return (
    <Fragment>
      <Typography>Adauga Angajat</Typography>
      <Container className maxWidth='sm'>
        <div>
          <div>
            <TextField label={'Nume'}></TextField>
          </div>
          <div>
            <TextField label={'Prenume'}></TextField>
          </div>
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
          <div>
            <TextField label={'CNP'}></TextField>
          </div>
          <div>
            <TextField label={'Seria Numar CI'}></TextField>
          </div>
        </div>
        <div>
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
        </div>
        <div>
          <div>
            <Button className={Adauga_Angajat} variant='contained' color='primary' size='large'>
              Adauga
            </Button>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

export default Adauga_Angajat
