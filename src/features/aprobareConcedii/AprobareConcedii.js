import * as React from 'react'
import TabelConcediu from 'features/afisareConcedii/TabelConcediu'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import headerStyle from 'assets/jss/components/headerStyle'
import { useHeader } from 'providers/AreasProvider'
import Typography from '@mui/material/Typography'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import stilAngajati from '../angajati/StilAngajati'
import { IconButton, makeStyles } from '@material-ui/core'

const stilAng = makeStyles(stilAngajati)
const rows = [
  {
    id: 1,
    name: 'Concediu medical',
    dataInceput: '10/16/2022',
    dataSfarsit: '10/17/2022',
    inlocuitor: 'Andrei Ionescu',
    motiv: '',
    angajat: 'Ion Popescu'
  },
  {
    id: 2,
    name: 'Concediu de odihna',
    dataInceput: '9/1/2022',
    dataSfarsit: '9/29/2022',
    inlocuitor: 'Maria Iancu',
    motiv: '',
    angajat: 'Ion Popescu'
  },
  {
    id: 3,
    name: 'Concediu de odihna',
    dataInceput: '8/28/2022',
    dataSfarsit: '8/30/2022',
    inlocuitor: 'Andreea Bogdan',
    motiv: '',
    angajat: 'Ion Popescu'
  }
]

export default function AprobareConcedii() {
  const stilButoanePaginare = stilAng()

  useHeader(
    <div variant='subtitles1' className={stilButoanePaginare.stilTitlu}>
      {'Aprobare concedii'}
    </div>
  )

  const [idRand, setIdRand] = useState(null)
  const esteAdmin = true

  const setareId = id => () => {
    if (id !== idRand) {
      setIdRand(id)
    } else {
      setIdRand(null)
    }
  }

  return (
    <div>
      <div>
        <div align='left'>
          <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
            Aproba
          </Button>
          <Button variant='contained' style={{ backgroundColor: '#FE4900' }}>
            Respinge
          </Button>
        </div>
      </div>
      <div>
        <br></br>
        <TabelConcediu rows={rows} setareId={setareId} esteAdmin={esteAdmin} idRand={idRand}></TabelConcediu>
      </div>
      <div className={stilButoanePaginare.divMarebutoane}>
        <div>
          <IconButton aria-label='NavigateBefore' style={{ backgroundColor: '#05241d', color: 'white' }}>
            <NavigateBefore />
          </IconButton>
        </div>
        <div className={stilButoanePaginare.divButonInainte}>
          <IconButton aria-label='NavigateNext' style={{ backgroundColor: '#05241d', color: 'white' }}>
            <NavigateNext />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
