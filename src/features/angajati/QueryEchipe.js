import { gql } from '@apollo/client'

const ECHIPA_DATA_QUERY = gql`
  query echipaData($echipa: String) {
    echipaData {
      id
      nume
    }
  }
`
export default ECHIPA_DATA_QUERY
