import * as React from 'react'
import TabelConcediu from './TabelConcediu'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import filtrari from './Filtrari'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(filtrari)

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
  const filtrareStyle = useStyles()
  const [filteredArray, setFilteredArray] = useState(rows)
  const esteAdmin = false
  const seFiltreaza = true

  const handleFilterNume = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.name.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  const handleFilterAngajat = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.angajat.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  const handleFilterInlocuitor = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.inlocuitor.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }

  return (
    <div>
      <div className={filtrareStyle.displayFiltrari}>
        <SearchBar onFilter={handleFilterNume} filtrareNume={'tipul de concediu'} />
        <SearchBar onFilter={handleFilterInlocuitor} filtrareNume={'numele inlocuitorului'} />
        <SearchBar onFilter={handleFilterAngajat} filtrareNume={'numele angajatului'} />
      </div>
      <TabelConcediu rows={rows} esteAdmin={esteAdmin} filtrare={filteredArray} seFiltreaza={seFiltreaza}></TabelConcediu>
      <div>
        <br></br>
        <div align='right'>
          <Link to='./AprobareConcedii'>
            <Button variant='contained' style={{ backgroundColor: '#26c6da' }}>
              Aproba concedii
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
