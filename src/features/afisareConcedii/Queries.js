import { gql } from '@apollo/client'

const CONCEDII_DATA_QUERY = gql`
  query concediiData {
    concediiData {
      id
      name
      dataInceput
      dataSfarsit
      inlocuitor
      comentarii
      angajat
    }
  }
`
export default CONCEDII_DATA_QUERY
