import { gql } from '@apollo/client'

export const POST_ADAUGACONCEDIU = gql`
  mutation adaugaConcediu($input: ConcediuInput) {
    adaugaConcediu(input: $input) {
      dataInceput: String
      dataIncetare: String
      comentarii: String
      concediuId: Int
      angajatId: Int
      numarZileDisponibile: Int
      numarZileSelectat: Int
      inlocuitorId: Int
    }
  }
`
