import { Rowing } from '@material-ui/icons'
import { useHistory } from 'react-router'

//state
export function init(initialState) {
  return { stare: initialState }
}

// export function Istoric() {
//   const history1 = useHistory()
//   const history2 = useHistory()
//   history1.push({ pathname: `/adauga_angajat` })
//   history2.push({ pathname: `/angajati/Promovare`,state: })
// }
//reducer

export function reducer(state, action, idRand) {
  switch (action.type) {
    case 'selecteazaAngajat':
      return { state: idRand }

    default:
      throw new Error()
  }
}
