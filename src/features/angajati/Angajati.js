import * as React from 'react'
import TabelAngajati from './TabelAngajati'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function createData(nume, prenume, email, manager, echipa) {
  return { nume, prenume, email, manager, echipa }
}
const rows = [
  createData('Popescu', 'Ioana', 'ioana@gmail.com', 'Popa Irina', 'IT'),
  createData('Ionescu', 'Ana', 'ana@yahoo.ro', 'Popescu Mihai', 'Marketing'),
  createData('Vasilescu', 'Mihai', 'mihai@gmail.com', 'Ionescu Cristina', 'Resurse Umane'),
  createData('Enescu', 'Ion', 'ion@gmail.com', 'Soare Mihaela', 'Marketing'),
  createData('Georgescu', 'Alina', 'alina@gmail.com', 'Enescu George', 'IT')
]

function AdaugaAngajat() {
  return <Link to={'/adauga_angajat'}></Link>
}
export default function Angajati() {
  return (
    <div>
      <div>
        <Button variant='contained' color='primary' onClick={AdaugaAngajat()}>
          Adauga un angajat nou
        </Button>
      </div>
      <br></br>
      <TabelAngajati rows={rows}></TabelAngajati>
    </div>
  )
}
