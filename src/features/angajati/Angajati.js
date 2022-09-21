import { React, useReducer, useState } from 'react'
import TabelAngajati from './TabelAngajati'
import { Link } from 'react-router-dom'
import { IconButton, makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'
import TextField from '@mui/material/TextField'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import { init, reducer } from 'features/angajati/AngajatiStateDefine'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'

const stilAng = makeStyles(stilAngajati)
const stilBtn = makeStyles(stilButoane)

function createData(id, nume, prenume, email, manager, echipa) {
  return { id, nume, prenume, email, manager, echipa }
}

//info din randuri
const rows = [
  createData('1', 'Popescu', 'Ioana', 'ioana@gmail.com', 'Popa Irina', 'IT'),
  createData('2', 'Ionescu', 'Ana', 'ana@yahoo.ro', 'Popescu Mihai', 'Marketing'),
  createData('3', 'Vasilescu', 'Mihai', 'mihai@gmail.com', 'Ionescu Cristina', 'Resurse Umane'),
  createData('4', 'Enescu', 'Ion', 'ion@gmail.com', 'Soare Mihaela', 'Marketing'),
  createData('5', 'Georgescu', 'Alina', 'alina@gmail.com', 'Enescu George', 'IT')
]

export default function Angajati(props) {
  const [state, dispatch] = useReducer(reducer, props, init)
  const stilButoanePaginare = stilAng()
  const stilButoaneActiuni = stilBtn()
  const history = useHistory()

  const [idRand, setIdRand] = useState(null)

  const setareId = id => () => {
    setIdRand(id)
    console.log(id)
  }

  const handleClick = () => {
    history.push({ pathname: `/angajati/Promovare/${idRand}` })
  }
  return (
    <div>
      <div className={stilButoanePaginare.divMarebutoane}>
        <div>
          <Link to='/adauga_angajat'>
            <button className={stilButoaneActiuni.buton}>ADAUGA UN ANGAJAT NOU</button>
          </Link>
        </div>
        <div>
          <Link to='/aprobareAngajati'>
            <button className={stilButoaneActiuni.buton}>APROBA ANGAJAT</button>
          </Link>
        </div>
        <div>
          {/* <Link to='/angajati/Promovare'>
            <button className={stilButoaneActiuni.buton}>PROMOVEAZA ANGAJAT</button>
          </Link> */}
          <button className={stilButoaneActiuni.buton} onClick={handleClick}>
            PROMOVEAZA ANGAJAT
          </button>
        </div>
      </div>
      <br></br>
      <div className={stilButoanePaginare.divMareTextField}>
        <div>
          <TextField id='filled-basic' label='Nume' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Prenume' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Email' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Manager' variant='standard' size='small' />
        </div>
        <div>
          <TextField id='filled-basic' label='Echipa' variant='standard' size='small' />
        </div>
      </div>
      <br></br>
      <TabelAngajati rows={rows} setareId={setareId}></TabelAngajati>
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
Angajati.propTypes = {
  rows: PropTypes.array
}
