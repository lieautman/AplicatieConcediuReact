import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'

function ProfileEdit({ stare }) {
    let dataAngajare = stare.textDataAngajareActuala
    let dataNastere = stare.textDataNastereActuala

    let ziDataAngajare=dataAngajare.substring(0,2)
    let lunaDataAngajare=dataAngajare.substring(3,5)
    let anDataAngajare=dataAngajare.substring(6,10)
    
    let dataAngajareFormatata=anDataAngajare+"-"+lunaDataAngajare+"-"+ziDataAngajare

    let ziDataNastere=dataNastere.substring(0,2)
    let lunaDataNastere=dataNastere.substring(3,5)
    let anDataNastere=dataNastere.substring(6,10)
    
    let dataNastereFormatata=anDataNastere+"-"+lunaDataNastere+"-"+ziDataNastere

  return (
    <Fragment>
      <TextField label='Nume' defaultValue={stare.textNume}></TextField>
      <TextField label='Prenume' defaultValue={stare.textPrenume}></TextField>
      <TextField label='Adresa' defaultValue={stare.textAdresaActuala}></TextField>
      <TextField label='Email' defaultValue={stare.textEmailActual}></TextField>
      <TextField type='number' label='Telefon' defaultValue={stare.textTelefonActual}></TextField>
      <TextField label='Functia' defaultValue={stare.textFunctiaActuala}></TextField>
      <TextField type='date' label='Data Angajare' defaultValue={dataAngajareFormatata}></TextField>
      <TextField type='date' label='Data Nastere' defaultValue={dataNastereFormatata}></TextField>
      <TextField label='Cod Numeric Personal' defaultValue={stare.textTelefonActual}></TextField>
      <TextField label='Serie Si Numar CI' defaultValue={stare.textSerieNumarCiActual}></TextField>
    </Fragment>
  )
}
ProfileEdit.propTypes = {
  stare: PropTypes.object.isRequired
}

export default ProfileEdit
