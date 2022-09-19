import React, { Fragment } from 'react'
import { Typography, Button, FormLabel } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import DatePicker from './DatePicker'
import ComboBoxTipConcediu from './ComboBoxTipConcediu'
import ComboBoxInlocuitor from './ComboBoxInlocuitor'


function CreareConcediu() {
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
    <Fragment>
      <Typography>Introdu detaliile concediului</Typography>
      {/* <Grid>Internships are amazing.</Grid> */}
      <ComboBoxTipConcediu></ComboBoxTipConcediu>
      <DatePicker></DatePicker>
      <DatePicker></DatePicker>
      <FormLabel>Numar zile disponibile</FormLabel>
      <ComboBoxInlocuitor></ComboBoxInlocuitor>
      <Button className={CreareConcediu} variant='contained' color='primary' size='large'>

  Adauga

      </Button>
    </Fragment>
    
  )
}

export default CreareConcediu




