import * as React from 'react'
import TabelConcediu from './TabelConcediu'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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

export default function ToateConcediile() {
  const [idRand, setIdRand] = useState(null)
  const esteAdmin = false
  return (
    <div>
      <div>
        <Link to='./AprobareConcedii'>
          <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
            Aproba concedii
          </Button>
        </Link>
      </div>
      <br></br>
      <TabelConcediu rows={rows} setIdRand={setIdRand} esteAdmin={esteAdmin}></TabelConcediu>
    </div>
  )
}
