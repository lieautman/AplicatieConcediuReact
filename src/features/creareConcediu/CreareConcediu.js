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

const useStyles = makeStyles(CreareConcediuCSS)

function CreareConcediu() {
  const classes = useStyles()

  return (
    <Fragment>
      <Card className={classes.card} variant='outlined'>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            <ComboBoxTipConcediu className={classes.tipConcediu}></ComboBoxTipConcediu>
          </Typography>

          <Typography className={classes.pos} color='textSecondary'>
            <div className={classes.datePicker}>
              <DatePickerIncepere></DatePickerIncepere>
              <DatePickerIncetare></DatePickerIncetare>
            </div>
          </Typography>
          <Typography>
            <div className={classes.formLabel1}>
              <TextField paragraph={true} disabled id='filled-disabled' label='Numar de zile selectat' variant='filled' />
              <TextField disabled id='filled-disabled' label='Numar zile disponibile' variant='filled' />
            </div>
          </Typography>
          <br />
          <div style={{ marginLeft: '70px' }}>
            <ComboBoxInlocuitor></ComboBoxInlocuitor>
          </div>
          <br></br>
          <div style={{ marginLeft: '120px' }}>
            <TextField
              id='outlined-multiline-static'
              label='Comentarii'
              multiline
              rows={4}
              defaultValue='Motiv/Comentarii'
              variant='outlined'
            />
          </div>
        </CardContent>
        <CardActions>
          <Button className={classes.StyleBtn} align='center' variant='contained' color='primary' size='large'>
            {' '}
            Adauga
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  )
}

export default CreareConcediu
