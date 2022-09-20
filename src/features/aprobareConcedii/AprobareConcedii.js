import * as React from 'react'
import TabelConcediu from 'features/afisareConcedii/TabelConcediu'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import headerStyle from 'assets/jss/components/headerStyle'
import { makeStyles } from '@material-ui/core'
import { useHeader } from 'providers/AreasProvider'
import Typography from '@mui/material/Typography'

const rows = [
  {
    name: 'Concediu medical',
    dataInceput: '10/16/2022',
    dataSfarsit: '10/17/2022',
    inlocuitor: 'Andrei Ionescu',
    motiv: '',
    angajat: 'Ion Popescu'
  },
  {
    name: 'Concediu de odihna',
    dataInceput: '9/1/2022',
    dataSfarsit: '9/29/2022',
    inlocuitor: 'Maria Iancu',
    motiv: '',
    angajat: 'Ion Popescu'
  },
  {
    name: 'Concediu de odihna',
    dataInceput: '8/28/2022',
    dataSfarsit: '8/30/2022',
    inlocuitor: 'Andreea Bogdan',
    motiv: '',
    angajat: 'Ion Popescu'
  }
]

export default function AprobareConcedii() {
  const useStyles = makeStyles(headerStyle)
  const titlu = useStyles()
  useHeader(<Typography className={titlu.title}>{'NavBar.Aprobare Concedii'}</Typography>)

  const [idRand, setIdRand] = useState(null)
  const esteAdmin = true

  return (
    <div>
      <div>
        <div align='right'>
          <Button variant='contained' color='primary'>
            Aproba
          </Button>
          <Button variant='contained' color='error'>
            Respinge
          </Button>
        </div>
      </div>
      <div>
        <br></br>
        <TabelConcediu rows={rows} setIdRand={setIdRand} esteAdmin={esteAdmin}></TabelConcediu>
      </div>
    </div>
  )
}
