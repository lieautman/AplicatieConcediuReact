export const initialState = {
  id: '',
  textNume: 'Popa',
  textPrenume: 'Adi',
  textEchipa: 'Marketing',
  Echipa: null,
  listaAngajatiDeAdaugat: [
    {
      id: '1',
      nume: 'Popescu',
      prenume: 'Ioana',
      echipa: 'IT'
    },
    { id: '2', nume: 'Georgescu', prenume: 'Ana', echipa: 'IT' },
    { id: '3', nume: 'Ionescu', prenume: 'Maria', echipa: 'Marketing' },
    { id: '4', nume: 'Antonescu', prenume: 'Cristian', echipa: 'Resurse Umane' },
    { id: '5', nume: 'Iliescu', prenume: 'David', echipa: 'IT' },
    { id: '5', nume: 'Marinescu', prenume: 'Mama', echipa: 'IT' }
  ],

  listaAngajatiAdaugati: []
}
export function reducer(state, action) {
  switch (action.inputName) {
    case 'textNume':
      return { ...state, textNume: action.inputValue }
    case 'textPrenume':
      return { ...state, textPrenume: action.inputValue }
    case 'textEchipa':
      return { ...state, textEchipa: action.inputValue }
    case 'OnPropertyChanged':
      return OnPropertyChanged(state, action)
    case 'listaAngajatiDeAdaugat':
      return { ...state, listaAngajatiDeAdaugat: action.inputValue }
    case 'listaAngajatiAdaugati':
      return { ...state, listaAngajatiAdaugati: action.inputValue }
    default:
      throw new Error()
  }
}
function OnPropertyChanged(state, action) {
  const { propertyName, value } = action
  return { ...state, [propertyName]: value }
}
