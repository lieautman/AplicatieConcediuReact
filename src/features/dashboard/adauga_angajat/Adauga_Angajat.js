import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Adauga_Angajatcss from './Adauga_Angajatcss'
import { useHeader } from 'providers/AreasProvider'
import { useReducer } from 'react'
import { initialState, reducer } from './Adauga_AngajatState'
import { AdaugaAngajatComp1 } from './AdaugaAngajatComp1'
import { AdaugaAngajatComp2 } from './AdaugaAngajatComp2'
import { useMutation } from '@apollo/client'
import { POST_ADAUGAANGAJAT } from './mutation'

const useStyles = makeStyles(Adauga_Angajatcss)

function Adauga_Angajat() {
  const classes = useStyles()
  const [localState, dispatch] = useReducer(reducer, initialState)

  const handleChange = (propertyName, value) => {
    console.log(value)
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }
  const [adaugaAngajat] = useMutation(POST_ADAUGAANGAJAT)

  const handleClick = async () => {
    adaugaAngajat()
  }

  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Adauga un angajat nou'}
    </div>
  )
  return (
    <Fragment>
      <Container className={classes.containeradaugaaangajat}>
        <AdaugaAngajatComp1
          handleChange={handleChange}
          localState={localState}
          className={classes.containeradaugaangajatleft}
        ></AdaugaAngajatComp1>
        <AdaugaAngajatComp2
          handleChange={handleChange}
          localState={localState}
          className={classes.containeradaugaangajatrigh}
        ></AdaugaAngajatComp2>
      </Container>
      <button className={classes.StyleBtn} variant='contained' size='large' onClick={handleClick}>
        ADAUGA
      </button>
    </Fragment>
  )
}
export default Adauga_Angajat
