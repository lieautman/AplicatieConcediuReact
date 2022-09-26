import { gql } from '@apollo/client'

export const POST_ADAUGAANGAJAT = gql`
  mutation adaugaAngajat($AngajatInput: Angajat) {
    Angajat(AngajatInput: AngajatInput) {
      id
      nume
      prenume
      email
      parola
      dataNasterii
      cnp
      seriaNumarBuletin
      numartelefon
      dataAngajarii
      esteAngajatCuActeInRegula
      managerId
      idEchipa
      salariu
    }
  }
`
