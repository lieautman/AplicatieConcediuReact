import * as React from 'react'
import TabelConcediu from './TabelConcediu'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

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
  const [filteredArray, setFilteredArray] = useState(rows)
  const esteAdmin = false

  const handleFilter = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return (
          el.name.toLowerCase().includes(value) || el.angajat.toLowerCase().includes(value) || el.inlocuitor.toLowerCase().includes(value)
        )
      }
    })

    setFilteredArray(newArray)

    return
  }

  return (
    <div>
      <SearchBar onFilter={handleFilter} />
      <div>
        <Link to='./AprobareConcedii'>
          <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
            Aproba concedii
          </Button>
        </Link>
      </div>
      <br></br>
      <TabelConcediu rows={rows} esteAdmin={esteAdmin} filtrare={filteredArray}></TabelConcediu>
    </div>
  )
}
