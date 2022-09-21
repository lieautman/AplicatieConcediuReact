import * as React from 'react'
import TabelAngajati from './TabelAngajati'
import { Link } from 'react-router-dom'
import { IconButton, makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'
import TextField from '@mui/material/TextField'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'

const stilAng = makeStyles(stilAngajati)
const stilBtn = makeStyles(stilButoane)

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
  const stilButoanePaginare = stilAng()
  const stilButoaneActiuni = stilBtn()
  return (
    <div>
      <div className={stilButoanePaginare.divMarebutoane}>
        <div>
          <Link to='/adauga_angajat'>
            <button className={stilButoaneActiuni.buton}>ADAUGA UN ANGAJAT NOU</button>
          </Link>
        </div>

        <Link to='./AprobareAngajati'>
          <div>
            <button className={stilButoaneActiuni.buton}>APROBA ANGAJAT</button>
          </div>
        </Link>

        <div>
          <Link to='/angajati/Promovare'>
            <button className={stilButoaneActiuni.buton}>PROMOVEAZA ANGAJAT</button>
          </Link>
        </div>
      </div>
      <br></br>
      <div className={stilButoanePaginare.divMareTextField}>
        <div>
          {' '}
          <TextField id='filled-basic' label='Nume' variant='standard' size='small' />
        </div>
        <div>
          {' '}
          <TextField id='filled-basic' label='Prenume' variant='standard' size='small' />
        </div>
        <div>
          {' '}
          <TextField id='filled-basic' label='Email' variant='standard' size='small' />
        </div>
        <div>
          {' '}
          <TextField id='filled-basic' label='Manager' variant='standard' size='small' />
        </div>
        <div>
          {' '}
          <TextField id='filled-basic' label='Echipa' variant='standard' size='small' />
        </div>
      </div>

      <br></br>

      <TabelAngajati rows={rows}></TabelAngajati>

      <div className={stilButoanePaginare.divMarebutoane}>
        <div>
          <IconButton aria-label='NavigateBefore' style={{ backgroundColor: '#05241d', color: 'white' }}>
            <NavigateBefore />
          </IconButton>
        </div>
        <div className={stilButoanePaginare.divButonInainte}>
          <IconButton aria-label='NavigateNext' style={{ backgroundColor: '#05241d', color: 'white' }}>
            <NavigateNext />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
