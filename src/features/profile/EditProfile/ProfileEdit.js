import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import SaveIcon from '@material-ui/icons/Save'

//css
import { makeStyles } from '@material-ui/core'
import profileStyle from '../Assets/ProfileCss'
//titlu
import { useHeader } from 'providers/AreasProvider'

//pt update
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'

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
  const DataAngajariiStringLabel = stare.DataAngajarii ? stare.DataAngajarii : '1999-01-01'
  const DataNasteriiStringLabel = stare.DataNasterii ? stare.DataNasterii : '1999-01-01'

  const USER_DATA_MUTATION = gql`
    mutation modificareDateProfil(
      $userId: Int!
      $userNumeUpdated: String
      $userPrenumeUpdated: String
      $userEmailUpdated: String
      $userNumartelefonUpdated: String
      $userCnpUpdated: String
      $seriaNumarBuletinUpdated: String
      $salariuUpdated: Float
      $userDataNasteriiUpdated: String
      $userDataAngajariiUpdated: String
    ) {
      modificareDateProfil(
        userId: $userId
        userNumeUpdated: $userNumeUpdated
        userPrenumeUpdated: $userPrenumeUpdated
        userEmailUpdated: $userEmailUpdated
        userNumartelefonUpdated: $userNumartelefonUpdated
        userCnpUpdated: $userCnpUpdated
        seriaNumarBuletinUpdated: $seriaNumarBuletinUpdated
        salariuUpdated: $salariuUpdated
        userDataNasteriiUpdated: $userDataNasteriiUpdated
        userDataAngajariiUpdated: $userDataAngajariiUpdated
      )
    }
  `
  const tratareUpdate = useMutation(USER_DATA_MUTATION, {
      variables: {
        userId: 1,
        userNumeUpdated: 'test',
        userPrenumeUpdated: 'test',
        userEmailUpdated: 'test@yahoo.com',
        userDataAngajariiUpdated: '2000-10-10',
        userNumartelefonUpdated: '0123456789',
        userDataNasteriiUpdated: '2000-11-08',
        userCnpUpdated: '5001108123123',
        seriaNumarBuletinUpdated: 'rk123123',
        salariuUpdated: 5000.1
      },
      onCompleted: data => {
        console.log(data)
        //if(data===true)
        //history.push({ pathname: `/profile` })
        //back to proffile
        //else
        //mesaj eroare
      }
    })

  return (
    <Fragment>
      <div className={classes.stilEditPageDivContainer1}>
        <div className={classes.stilEditPageDivContaineLeft}>
          <div className={classes.stilEditPageInput}>
            <TextField label='Nume' value={stare.Nume} fullWidth onChange={evt => modifyDataProfile('Nume', evt.target.value)}></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Prenume'
              value={stare.Prenume}
              fullWidth
              onChange={evt => modifyDataProfile('Prenume', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Adresa'
              value={stare.textAdresaActuala}
              fullWidth
              onChange={evt => modifyDataProfile('textAdresaActuala', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Email'
              value={stare.Email}
              fullWidth
              onChange={evt => modifyDataProfile('Email', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Telefon'
              value={stare.Numartelefon}
              fullWidth
              onChange={evt => modifyDataProfile('Numartelefon', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageDivContainerRight}>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Functia'
              value={stare.Functia}
              fullWidth
              onChange={evt => modifyDataProfile('Functia', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label={'Data angajarii: ' + DataAngajariiStringLabel.toString()}
              defaultValue=''
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={evt => modifyDataProfile('DataAngajarii', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              type='date'
              label={'Data nasterii: ' + DataNasteriiStringLabel.toString()}
              defaultValue=''
              InputLabelProps={{ shrink: true }}
              fullWidth
              onChange={evt => modifyDataProfile('DataNasterii', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Cod Numeric Personal'
              value={stare.Cnp}
              fullWidth
              onChange={evt => modifyDataProfile('Cnp', evt.target.value)}
            ></TextField>
          </div>
          <div className={classes.stilEditPageInput}>
            <TextField
              label='Serie Si Numar CI'
              value={stare.SeriaNumarBuletin}
              fullWidth
              onChange={evt => modifyDataProfile('SeriaNumarBuletin', evt.target.value)}
            ></TextField>
          </div>
        </div>
        <div className={classes.stilEditPageInputButton}>
          <div className={classes.stilEditPageInputOverButton}>
            <TextField
              label='Salariu'
              value={stare.Salariu}
              fullWidth
              onChange={evt => modifyDataProfile('Salariu', evt.target.value)}
            ></TextField>
          </div>
          <Button
          onClick={() => tratareUpdate}
            variant='contained'
            color='primary'
            size='large'
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
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
//

