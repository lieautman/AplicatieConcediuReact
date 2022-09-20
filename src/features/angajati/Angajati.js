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


export default function Angajati() {
  return (
    <div>
      <div>
        <Link to={'/adauga_angajat'}>
          <Button variant='contained' color='primary'>
            Adauga un angajat nou
          </Button>
        </Link>
      </div>
      <br></br>
      <TabelAngajati rows={rows}></TabelAngajati>
    </div>
  )
}
