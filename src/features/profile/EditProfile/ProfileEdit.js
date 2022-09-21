import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import SaveIcon from '@material-ui/icons/Save'

//css
import { makeStyles } from '@material-ui/core'
import profileStyle from '../Assets/ProfileCss'
//titlu
import { useHeader } from 'providers/AreasProvider'

const useStyles = makeStyles(profileStyle)

function ProfileEdit({ stare, modifyDataProfile }) {
  //css
  const classes = useStyles()
  //titlu
  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Editeaza date'}
    </div>
  )

  return (
    <Fragment>
      <div className={classes.stilEditPageDivContainer1}>
        <div className={classes.stilEditPageDivContaineLeft}>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Nume'
              defaultValue={stare.textNume}
              onChange={evt => modifyDataProfile('textNume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Prenume'
              defaultValue={stare.textPrenume}
              onChange={evt => modifyDataProfile('textPrenume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Adresa'
              defaultValue={stare.textAdresaActuala}
              onChange={evt => modifyDataProfile('textAdresaActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Email'
              defaultValue={stare.textEmailActual}
              onChange={evt => modifyDataProfile('textEmailActual', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='number'
              label='Telefon'
              defaultValue={stare.textTelefonActual}
              onChange={evt => modifyDataProfile('textTelefonActual', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageDivContainerRight}>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Functia'
              defaultValue={stare.textFunctiaActuala}
              onChange={evt => modifyDataProfile('textFunctiaActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label='Data Angajare'
              defaultValue={stare.textDataNastereActuala}
              onChange={evt => modifyDataProfile('textDataAngajareActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label='Data Nastere'
              defaultValue={stare.textDataNastereActuala}
              onChange={evt => modifyDataProfile('textDataNastereActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Cod Numeric Personal'
              defaultValue={stare.textTelefonActual}
              onChange={evt => modifyDataProfile('textCnpActual', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Serie Si Numar CI'
              defaultValue={stare.textSerieNumarCiActual}
              onChange={evt => modifyDataProfile('textSerieNumarCiActual', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageInputButton}>
          <div className={classes.stilEditPageInputOverButton}>
            <TextField
              label='Salariu'
              defaultValue={stare.textSalariuActual}
              onChange={evt => modifyDataProfile('textSalariuActual', evt.target.value)}
            ></TextField>
          </div>
          <Link to={'/profile'}>
            <Button variant='contained' color='primary' size='large' className={classes.button} startIcon={<SaveIcon />}>
              Save
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}
ProfileEdit.propTypes = {
  stare: PropTypes.object.isRequired,
  modifyDataProfile: PropTypes.func.isRequired
}

export default ProfileEdit
