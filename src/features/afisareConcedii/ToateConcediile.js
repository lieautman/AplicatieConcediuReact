import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

function ToateConcediile() {
  const addToast = useToast()
  addToast('Toate concediile')
  return (
    <Fragment>
      <Typography>ToateConcediile</Typography>
      <Grid>Internships are amazing.</Grid>
    </Fragment>
  )
}

export default ToateConcediile

