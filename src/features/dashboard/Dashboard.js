import React from 'react'
import CardEchipa from './CardEchipa'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const echipeArray = [
  {
    id: 1,
    nume: 'Marketing',
    descriere: 'test',
    poza: 'https://media.istockphoto.com/photos/ro/imagine-avocat-om-de-afaceri-%C8%99edin%C8%9Bei-la-birou-cu-un-client-femeie-explic%C3%A2nd-acordul-de-id1330020430?s=612x612'
  },
  {
    id: 2,
    nume: 'Resurse umane',
    descriere: 'test1',
    poza: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
  },
  {
    id: 3,
    nume: 'Dezvoltare',
    descriere: 'test1',
    poza: 'https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 4,
    nume: 'Servicii financiare',
    descriere: 'test1',
    poza: 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
  },
  {
    id: 5,
    nume: 'IT Suport',
    descriere: 'test1',
    poza: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
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
