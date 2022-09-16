import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

function Angajati() {
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
    <Fragment>
      <Typography>Pagina angajati...</Typography>
      <Grid>Internships are amazing.</Grid>
    </Fragment>
  )
}

export default Angajati
