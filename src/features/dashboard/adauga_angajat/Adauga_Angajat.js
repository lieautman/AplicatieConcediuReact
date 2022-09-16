
import React, {Fragment} from "react";
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

function Adauga_Angajat() {
    const addToast = useToast()
    addToast('Welcome', 'success')
    return (
      <Fragment>
        <Typography>Add an employee</Typography>
        <Grid>Please add an employee</Grid>
      </Fragment>
    )
  }
  
  export default Adauga_Angajat
  