import React, { Fragment } from 'react'

import ProfilePhoto from './ProfilePhoto.js'
import ProfileUserDataString from './ProfileUserDataString'
import ProfileEditButton from './ProfileEditButton'

import AdressEmailPhonePhoto from './AdressEmailPhonePhoto.js'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'
import profileStyle from './ProfileCss'

//css
const useStyles = makeStyles(profileStyle)

function Profile() {
  //css
  const classes = useStyles()

  let textNumePrenume = 'NUME SI PRENUME'
  let textNume = 'Popa'
  let textPrenume = 'Adi'
  let textAdresa = 'ADRESA'
  let textAdresaActuala = 'Str. Sperantei, Cartierul Fericirea, Sector 4, Bucuresti, Romania, cod postal 63700'
  let textEmail = 'EMAIL'
  let textEmailActual = 'adi_pop@yahoo.com'
  let textTelefon = 'TELEFON'
  let textTelefonActual = '07123112312'
  let textFunctia = 'FUNCTIA'
  let textFunctiaActuala = 'Administrator Aplicatie Concedii'
  let textDataAngajare = 'DATA ANGAJARE'
  let textDataAngajareActuala = '22.01.2011'
  let textCnp = 'COD NUMERIC PERSONAL'
  let textCnpActual = '1234567890123'
  let textSerieNumarCi = 'SERIE SI NUMAR CI'
  let textSerieNumarCiActual = 'RK123123'
  return (
    <Fragment>
      <div className={classes.styleContainerMare}>
        <div>
          <ProfileUserDataString text={textNumePrenume} idDat={classes.textNumePrenume}></ProfileUserDataString>
          <div className={classes.containerProfileCard}>
            <ProfilePhoto idDat={classes.pozaProfilCard}></ProfilePhoto>
            <div className={classes.containerNumePrenumProfileCard}>
              <ProfileUserDataString text={textNume} idDat={classes.textNume}></ProfileUserDataString>
              <ProfileUserDataString text={textPrenume} idDat={classes.textPrenume}></ProfileUserDataString>
            </div>
            <ProfileEditButton idDat={classes.pozaEditProfilCard}></ProfileEditButton>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={textAdresa} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={textAdresaActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={textEmail} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={textEmailActual}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={textTelefon} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={textTelefonActual}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={textFunctia} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={textFunctiaActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={textDataAngajare} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={textDataAngajareActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.styleCnpSerieNumarCi}>
            <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
              <div>
                <ProfileUserDataString text={textCnp} idDat={classes.textNumePrenume}></ProfileUserDataString>
                <ProfileUserDataString
                  text={textCnpActual}
                  idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
                ></ProfileUserDataString>
              </div>
            </div>
            <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
              <div>
                <ProfileUserDataString text={textSerieNumarCi} idDat={classes.textNumePrenume}></ProfileUserDataString>
                <ProfileUserDataString
                  text={textSerieNumarCiActual}
                  idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
                ></ProfileUserDataString>
              </div>
            </div>
          </div>
          <div>concediile sale</div>
          <div>fisiere atasate (pentru concedii?)</div>
        </div>
      </div>
    </Fragment>
  )
}
Profile.propTypes = {
  text: PropTypes.object.isRequired,
  idDat: PropTypes.object.isRequired
}

export default Profile
