import * as React from 'react'
import TabelAngajati from 'features/angajati/TabelAngajati'

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

export default function AngajatiEchipe() {
  return (
    <div>
      <TabelAngajati rows={rows}></TabelAngajati>
    </div>
  )
}
