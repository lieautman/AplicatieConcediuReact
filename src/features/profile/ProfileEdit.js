import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';

//css
import { makeStyles } from '@material-ui/core'
import profileStyle from './ProfileCss'
const useStyles = makeStyles(profileStyle)

function ProfileEdit({ stare }) {
  //css
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.stilEditPageDivContainer}>
        <div className={classes.stilEditPageInput}><TextField label='Nume' defaultValue={stare.textNume}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField label='Prenume' defaultValue={stare.textPrenume}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField label='Adresa' defaultValue={stare.textAdresaActuala}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField type='number' label='Telefon' defaultValue={stare.textTelefonActual}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField label='Functia' defaultValue={stare.textFunctiaActuala}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField type='date' label='Data Angajare' defaultValue={stare.textDataNastereActuala}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField type='date' label='Data Nastere' defaultValue={stare.textDataNastereActuala}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField label='Cod Numeric Personal' defaultValue={stare.textTelefonActual}></TextField></div>
        <div className={classes.stilEditPageInput}><TextField label='Serie Si Numar CI' defaultValue={stare.textSerieNumarCiActual}></TextField></div>
        <div className={classes.stilEditPageInput}> <Link to={"/profile"}><Button variant="contained" color="primary" size="large" className={classes.button}
        startIcon={<SaveIcon />}>Save</Button></Link></div>
      </div>
    </Fragment>
  )
}
ProfileEdit.propTypes = {
  stare: PropTypes.object.isRequired
}

export default ProfileEdit
