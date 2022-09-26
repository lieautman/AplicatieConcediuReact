import { gql } from '@apollo/client'

export const POST_ADAUGAANGAJAT = gql`
  mutation adaugaAngajat($input: AngajatInput) {
    Angajat(input: $input) {
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
