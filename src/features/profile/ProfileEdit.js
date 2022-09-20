import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import SaveIcon from '@material-ui/icons/Save'

//css
import { makeStyles } from '@material-ui/core'
import profileStyle from './ProfileCss'
const useStyles = makeStyles(profileStyle)

function ProfileEdit({ stare, modifyDataProfile }) {
  //css
  const classes = useStyles()

  useEffect(() => {
    console.log(stare.textNume)
  }, [stare.textNume])
  
  return (
    <Fragment>
      <div className={classes.stilEditPageDivContainer1}>
        <div className={classes.stilEditPageDivContainer}>
          <div className={classes.stilEditPageInput}>
            <TextField label='Nume' defaultValue={stare.textNume} onChange={evt => modifyDataProfile('textNume', evt.target.value)}></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField label='Prenume' defaultValue={stare.textPrenume} onChange={evt => modifyDataProfile('textNume', evt.target.value)}></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField label='Adresa' defaultValue={stare.textAdresaActuala} onChange={evt => modifyDataProfile('textNume', evt.target.value)}></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField label='Email' defaultValue={stare.textEmailActual} onChange={evt => modifyDataProfile('textNume', evt.target.value)}></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='number'
              label='Telefon'
              defaultValue={stare.textTelefonActual}
              onChange={evt => modifyDataProfile('textNume', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageDivContainer}>
          <div className={classes.stilEditPageInput}>
            <TextField label='Functia' defaultValue={stare.textFunctiaActuala} onChange={evt => modifyDataProfile('textNume', evt.target.value)}></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label='Data Angajare'
              defaultValue={stare.textDataNastereActuala}
              onChange={evt => modifyDataProfile('textNume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label='Data Nastere'
              defaultValue={stare.textDataNastereActuala}
              onChange={evt => modifyDataProfile('textNume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Cod Numeric Personal'
              defaultValue={stare.textTelefonActual}
              onChange={evt => modifyDataProfile('textNume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Serie Si Numar CI'
              defaultValue={stare.textSerieNumarCiActual}
              onChange={evt => modifyDataProfile('textNume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            {' '}
            <Link to={'/profile'}>
              <Button variant='contained' color='primary' size='large' className={classes.button} startIcon={<SaveIcon />}>
                Save
              </Button>
            </Link>
          </div>
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
