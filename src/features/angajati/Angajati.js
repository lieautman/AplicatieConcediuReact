import * as React from 'react'
import TabelAngajati from './TabelAngajati'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'

const stilAng = makeStyles(stilAngajati)
const stilBtn= makeStyles(stilButoane)

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
  const stilButoanePaginare = stilAng()
  const stilButoaneActiuni= stilBtn()
  return (
    <div>
      <div className={stilButoanePaginare.divMarebutoane}>
      <div>
        <button className={stilButoaneActiuni.buton} onClick={AdaugaAngajat()}>
          ADAUGA UN ANGAJAT NOU
        </button>
      </div>

      <div>
        <button className={stilButoaneActiuni.buton} onClick={AdaugaAngajat()}>
          APROBA ANGAJAT
        </button>
      </div>

      <div>
        <button className={stilButoaneActiuni.buton} onClick={AdaugaAngajat()}>
          PROMOVEAZA ANGAJAT
        </button>
      </div>
      </div>
      
      <br></br>
      <TabelAngajati rows={rows}></TabelAngajati>
      <div className={stilButoanePaginare.divMarebutoane}>
        <div>
          <button className={stilButoanePaginare.butonInapoi}>Inapoi</button>
        </div>
        <div className={stilButoanePaginare.divButonInainte}>
          <button className={stilButoanePaginare.butonInainte}>Inainte</button>
        </div>
      </div>
    </div>
  )
}
