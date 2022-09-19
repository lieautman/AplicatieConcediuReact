import React, { Fragment } from 'react'
import { Typography, Button, FormLabel, Container } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import DatePickerIncepere from './DatePickerIncepere'
import DatePickerIncetare from './DatePickerIncetare'
import ComboBoxTipConcediu from './ComboBoxTipConcediu'
import ComboBoxInlocuitor from './ComboBoxInlocuitor'
import { makeStyles } from '@material-ui/core/styles'
import CreareConcediuCSS from './CreareConcediuCSS'

const useStyles = makeStyles(CreareConcediuCSS)

function CreareConcediu(){

const classes = useStyles()

  return (
    <Fragment>

      
      <Container maxWidth = "sm">
      <Typography>Introdu detaliile concediului:</Typography>
      {/* <Grid>Internships are amazing.</Grid> */}
      <br></br>
      <ComboBoxTipConcediu></ComboBoxTipConcediu>
      <br></br>
      <DatePickerIncepere></DatePickerIncepere>
      <br></br>
      <DatePickerIncetare></DatePickerIncetare>
      <br></br>
      <FormLabel>Numar zile disponibile</FormLabel>
      <br></br>
      <br></br>
      <ComboBoxInlocuitor></ComboBoxInlocuitor>
      <br></br>
      </Container>
      <Button className={classes.StyleBtn} variant='contained' color='primary' size='large'> Adauga</Button>
     
    </Fragment>
    
  )
}

export default CreareConcediu




