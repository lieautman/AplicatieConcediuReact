import * as React from 'react'
import TabelAngajati from 'features/angajati/TabelAngajati'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import ANGAJATI_PER_ECHIPA_DATA_QUERY from './Queries'
import PropTypes from 'prop-types'
import { useRouteMatch } from 'react-router-dom'

// function createData(nume, prenume, email, manager, echipa) {
//   return { nume, prenume, email, manager, echipa }
// }
// const rows = [
//   createData('Popescu', 'Ioana', 'ioana@gmail.com', 'Popa Irina', 'IT'),
//   createData('Ionescu', 'Ana', 'ana@yahoo.ro', 'Popescu Mihai', 'Marketing'),
//   createData('Vasilescu', 'Mihai', 'mihai@gmail.com', 'Ionescu Cristina', 'Resurse Umane'),
//   createData('Enescu', 'Ion', 'ion@gmail.com', 'Soare Mihaela', 'Marketing'),
//   createData('Georgescu', 'Alina', 'alina@gmail.com', 'Enescu George', 'IT')
// ]

export default function AngajatiEchipe() {
  const match = useRouteMatch()
  const { data } = useQueryWithErrorHandling(ANGAJATI_PER_ECHIPA_DATA_QUERY, { variables: { echipa: match.params.nume } })
  return (
    <div>
      <TabelAngajati rows={data ? data.CardData : []}></TabelAngajati>
    </div>
  )
}
