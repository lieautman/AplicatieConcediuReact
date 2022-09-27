export const initialState = {
  nume: '',
  prenume: '',
  dataNasterii: new Date(),
  cnp: '',
  seriaNumarBuletin: '',
  numartelefon: '',
  dataAngajarii: new Date(),
  idEchipa: '',
  managerId: '',
  email: '',
  parola: ''
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
  console.log(value)
  return { ...state, [propertyName]: value }
}
