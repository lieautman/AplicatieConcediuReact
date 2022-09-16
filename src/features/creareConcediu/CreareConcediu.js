import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

function CreareConcediu() {
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
    <Fragment>
      <Typography>Aici creezi concediul</Typography>
      <Grid>Internships are amazing.</Grid>
    </Fragment>
  )
}

export default CreareConcediu