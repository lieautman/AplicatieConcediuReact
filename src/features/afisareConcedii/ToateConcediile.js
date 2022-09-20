import * as React from 'react'
import TabelConcediu from './TabelConcediu'
import Button from '@mui/material/Button'
import React, { useState } from 'react'

const rows = [
  {
    name: 'Concediu medical',
    dataInceput: '10/16/2022',
    dataSfarsit: '10/17/2022',
    inlocuitor: 'Andrei Ionescu',
    motiv: '',
    angajat: 'Ion Popescu',
    stareConcediu: 'Aprobat'
  },
  {
    name: 'Concediu de odihna',
    dataInceput: '9/1/2022',
    dataSfarsit: '9/29/2022',
    inlocuitor: 'Maria Iancu',
    motiv: '',
    angajat: 'Ion Popescu',
    stareConcediu: 'Trimis'
  },
  {
    name: 'Concediu de odihna',
    dataInceput: '8/28/2022',
    dataSfarsit: '8/30/2022',
    inlocuitor: 'Andreea Bogdan',
    motiv: '',
    angajat: 'Ion Popescu',
    stareConcediu: 'Respins'
  }
]

export default function ToateConcediile() {
  return (
    <div>
      <div>
        <Button variant='contained' color='primary'>
          Aproba concedii
        </Button>
      </div>
      <br></br>
      <TabelConcediu rows={rows}></TabelConcediu>
    </div>
  )
}
