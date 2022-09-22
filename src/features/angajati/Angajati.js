import { React, useReducer, useState } from 'react'
import TabelAngajati from './TabelAngajati'
import { Link } from 'react-router-dom'
import { IconButton, makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import stilButoane from './StilButoane'
import Filtrare from './Filtrare'
import NavigateNext from '@material-ui/icons/NavigateNext'
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import { init, reducer } from 'features/angajati/AngajatiStateDefine'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { Message } from '@material-ui/icons'

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
  const [filteredArray, setFilteredArray] = useState(rows)

  const [idRand, setIdRand] = useState(null)

  const setareId = id => () => {
    setIdRand(id)
    console.log(id)
  }

  const handleClick = () => {
    if (idRand) {
      history.push({ pathname: `/angajati/Promovare/${idRand}` })
    }
  }

  const handleFilterNume = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.nume.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }
  const handleFilterPrenume = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.prenume.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }
  const handleFilterEmail = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.email.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }
  const handleFilterManager = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.manager.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
  }
  const handleFilterEchipa = input => {
    const value = input.target.value

    const newArray = rows.filter(el => {
      if (value === '') {
        return el
      } else {
        return el.echipa.toLowerCase().includes(value)
      }
    })

    setFilteredArray(newArray)

    return
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
          <button className={stilButoaneActiuni.buton} onClick={handleClick}>
            PROMOVEAZA ANGAJAT
          </button>
        </div>
      </div>
      <br></br>
      <div className={stilButoanePaginare.divMareTextField}>
        <Filtrare
          handleFilterNume={handleFilterNume}
          handleFilterPrenume={handleFilterPrenume}
          handleFilterEmail={handleFilterEmail}
          handleFilterManager={handleFilterManager}
          handleFilterEchipa={handleFilterEchipa}
        ></Filtrare>
      </div>

      <br></br>

      <TabelAngajati rows={rows} setareId={setareId} filtrare={filteredArray}></TabelAngajati>
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
