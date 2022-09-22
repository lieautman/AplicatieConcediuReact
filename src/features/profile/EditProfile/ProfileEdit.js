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
              value={stare.Nume}
              onChange={evt => modifyDataProfile('Nume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Prenume'
              value={stare.Prenume}
              onChange={evt => modifyDataProfile('Prenume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Adresa'
              value={stare.textAdresaActuala}
              onChange={evt => modifyDataProfile('textAdresaActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Email'
              value={stare.Email}
              onChange={evt => modifyDataProfile('Email', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='number'
              label='Telefon'
              value={stare.Numartelefon}
              onChange={evt => modifyDataProfile('Numartelefon', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageDivContainerRight}>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Functia'
              value={stare.Functia}
              onChange={evt => modifyDataProfile('Functia', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label='Data Angajare'
              value={stare.DataAngajarii?stare.DataAngajarii:"1999-01-01"}
              onChange={evt => modifyDataProfile('textDataAngajareActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label='Data Nastere'
              value={stare.DataNasterii?stare.DataNasterii:"1999-01-01"}
              onChange={evt => modifyDataProfile('textDataNastereActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Cod Numeric Personal'
              value={stare.Cnp}
              onChange={evt => modifyDataProfile('textCnpActual', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Serie Si Numar CI'
              value={stare.SeriaNumarBuletin}
              onChange={evt => modifyDataProfile('textSerieNumarCiActual', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageInputButton}>
          <div className={classes.stilEditPageInputOverButton}>
            <TextField
              label='Salariu'
              value={stare.Salariu}
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
