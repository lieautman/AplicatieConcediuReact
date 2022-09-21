import React from 'react'
import CardEchipa from './CardEchipa'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const echipeArray = [
  {
    id: 1,
    nume: 'Marketing',
    descriere: 'test',
    poza: './images/HouseOfMarketing.png'
  },
  {
    id: 2,
    nume: 'Resurse umane',
    descriere: 'test1',
    poza: './images/HouseOfHumanResources.png'
  },
  {
    id: 3,
    nume: 'Dezvoltare',
    descriere: 'test1',
    poza: './images/HouseOfDevelopment.png'
  },
  {
    id: 4,
    nume: 'Servicii financiare',
    descriere: 'test1',
    poza: './images/HouseOfFinancialServices.png'
  },
  {
    id: 5,
    nume: 'IT Suport',
    descriere: 'test1',
    poza: './images/HouseOfItSupport.png'
  }
]

export default function Dashboard() {
  return (
    <Grid container>
      {echipeArray.map(echipa => (
        <CardEchipa echipa={echipa} key={echipa.id}></CardEchipa>
      ))}
    </Grid>
  )
}
