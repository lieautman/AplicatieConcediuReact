import React, { Fragment } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreareConcediuCSS from './CreareConcediuCSS'
import Button from '@material-ui/core/Button'
import { useHeader } from 'providers/AreasProvider'
import CreareConcediuComp from './CreareConcediuComp'
import { useReducer } from 'react'
import { initialState, reducer } from './CreareConcediuState'

const useStyles = makeStyles(CreareConcediuCSS)

function CreareConcediu(props) {
  const classes = useStyles()
  const [localState, dispatch] = useReducer(reducer, initialState)
  const handleChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }
  useHeader(
    <div variant='subtitles1' className={classes.stilTitlu}>
      {'Adauga un concediu nou'}
    </div>
  )

  return (
    <Fragment>
      <Container className={classes.container} maxWidth='sm'>
        <CreareConcediuComp handleChange={handleChange} localState={localState}></CreareConcediuComp>

        <button className={classes.StyleBtn} align='center' variant='contained' color='primary' size='large'>
          {' '}
          ADAUGA
        </button>
      </Container>
    </Fragment>
  )
}

export default CreareConcediu
