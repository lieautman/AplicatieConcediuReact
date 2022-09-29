import { gql } from '@apollo/client'
const INLOCUITOR_QUERY = gql`
  query InlocuitoriData($dataInceput: String, $dataSfarsit: String, $idAngajat: Int) {
    inlocuitoriData(dataInceput: $dataInceput, dataSfarsit: $dataSfarsit, idAngajat: $idAngajat) {
      nume
      prenume
      inlocuitor
      idEchipa
    }
  }
`
export default INLOCUITOR_QUERY
