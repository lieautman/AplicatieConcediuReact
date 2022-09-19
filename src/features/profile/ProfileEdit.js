import React, { Fragment}from 'react'
import PropTypes from 'prop-types'


import TextField from '@mui/material/TextField';

function ProfileEdit({stare}) {
  return (
    <Fragment>
        <TextField label="Nume" defaultValue={stare.textNume}></TextField>
        <TextField label="Prenume" defaultValue={stare.textPrenume}></TextField>
        <TextField label="Adresa" defaultValue={stare.textAdresaActuala}></TextField>
        <TextField label="Email" defaultValue={stare.textEmailActual}></TextField>
        <TextField type="number" label="Telefon" defaultValue={stare.textTelefonActual}></TextField>
        <TextField label="Cod Numeric Personal" defaultValue={stare.textTelefonActual}></TextField>
        <TextField label="Serie Si Numar CI" defaultValue={stare.textSerieNumarCiActual}></TextField>

    </Fragment>
  )
}
ProfileEdit.propTypes = {
    stare: PropTypes.object.isRequired
  }

export default ProfileEdit