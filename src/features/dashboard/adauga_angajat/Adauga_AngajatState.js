import { AccessTimeOutlined, KeyboardReturnRounded } from '@material-ui/icons'

export const initialState = {
  Nume: null,
  Prenume: null,
  DataNasterii: null,
  CNP: null,
  SeriaNumarCI: null,
  Numardetelefon: null,
  DataAngajarii: null,
  Echipa: null,
  Manager: null
}

export function reducer(state, action) {
  switch (action.type) {
    case 'OnPropertyChanged':
      return OnPropertyChanged(state, action)
    default:
      throw new Error()
  }
}

function OnPropertyChanged(state, action) {
  const { propertyName, value } = action
  return { ...state, [propertyName]: value }
}