import { gql } from '@apollo/client'

const ANGAJATI_DATA_QUERY = gql`
  query AngajatiData {
    angajatiData {
      id
      nume
      prenume
      email
      echipa
    }
  }
`
export default ANGAJATI_DATA_QUERY
