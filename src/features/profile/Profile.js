import React, { Fragment } from 'react'

import ProfilePhoto from './ProfilePhoto.js'
import ProfileUserDataString from './ProfileUserDataString'
import ProfileEditButton from './ProfileEditButton'
import ProfileTabelConcedii from './ProfileTabelConcedii'
import ProfileAddAtachment from './ProfileAddAtachment'

import AdressEmailPhonePhoto from './AdressEmailPhonePhoto.js'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'
import profileStyle from './ProfileCss'

//css
const useStyles = makeStyles(profileStyle)

function Profile({stare}) {
  //css
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.styleContainerMare}>
        <div>
          <ProfileUserDataString text={stare.textNumePrenume} idDat={classes.textNumePrenume}></ProfileUserDataString>
          <div className={classes.containerProfileCard}>
            <ProfilePhoto idDat={classes.pozaProfilCard}></ProfilePhoto>
            <div className={classes.containerNumePrenumProfileCard}>
              <ProfileUserDataString text={stare.textNume} idDat={classes.textNume}></ProfileUserDataString>
              <ProfileUserDataString text={stare.textPrenume} idDat={classes.textPrenume}></ProfileUserDataString>
            </div>
            <ProfileEditButton idDat={classes.pozaEditProfilCard}></ProfileEditButton>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={stare.textAdresa} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.textAdresaActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={stare.textEmail} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.textEmailActual}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <AdressEmailPhonePhoto idDat={classes.pozaAdresaEmailTelefon}></AdressEmailPhonePhoto>
            <div>
              <ProfileUserDataString text={stare.textTelefon} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.textTelefonActual}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={stare.textFunctia} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.textFunctiaActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={stare.textDataAngajare} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.textDataAngajareActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
          <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
            <div>
              <ProfileUserDataString text={stare.textDataNastere} idDat={classes.textNumePrenume}></ProfileUserDataString>
              <ProfileUserDataString
                text={stare.textDataNastereActuala}
                idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
              ></ProfileUserDataString>
            </div>
          </div>
        </div>
        <div className={classes.stilADouaJumatateDePagina}>
          <div className={classes.styleCnpSerieNumarCi}>
            <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
              <div>
                <ProfileUserDataString text={stare.textCnp} idDat={classes.textNumePrenume}></ProfileUserDataString>
                <ProfileUserDataString
                  text={stare.textCnpActual}
                  idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
                ></ProfileUserDataString>
              </div>
            </div>
            <div className={classes.containerAdresaEmailTelefonFunctieDataAngajare}>
              <div>
                <ProfileUserDataString text={stare.textSerieNumarCi} idDat={classes.textNumePrenume}></ProfileUserDataString>
                <ProfileUserDataString
                  text={stare.textSerieNumarCiActual}
                  idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
                ></ProfileUserDataString>
              </div>
            </div>
          </div>
          <div className={classes.styleContainerConcediileMele}>
            <ProfileUserDataString text={stare.textTabelConcedii} idDat={classes.textNume}></ProfileUserDataString>
            <ProfileTabelConcedii idDat={classes.stilTabel}></ProfileTabelConcedii>
          </div>
          <div className={classes.styleContainerConcediileMele}>
            <ProfileUserDataString text={stare.textAtasamente} idDat={classes.textNume}></ProfileUserDataString>
            <div className={classes.butonUploadAtasament}>
              <ProfileAddAtachment></ProfileAddAtachment>
              <div>
                <ProfileUserDataString
                  text={stare.textAtasamenteUpload}
                  idDat={classes.textAdresaEmailTelefonFunctiaDataAngajare}
                ></ProfileUserDataString>
                <ProfileUserDataString text={stare.textAtasamenteUploadTypes} idDat={classes.textNumePrenume}></ProfileUserDataString>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
Profile.propTypes = {
  stare: PropTypes.object.isRequired
}

export default Profile