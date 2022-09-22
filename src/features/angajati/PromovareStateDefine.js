export const initialState = {
  textNume: 'Popa',
  textPrenume: 'Adi',
  textEchipa: 'Marketing',
  Echipa: null,
  listaAngajatiDeAdaugat: [
    {
      nume: 'Popescu',
      prenume: 'Ioana',
      echipa: 'IT'
    },
    { nume: 'Georgescu', prenume: 'Ana', echipa: 'IT' },
    { nume: 'Ionescu', prenume: 'Maria', echipa: 'Marketing' },
    { nume: 'Antonescu', prenume: 'Cristian', echipa: 'Resurse Umane' },
    { nume: 'Iliescu', prenume: 'David', echipa: 'IT' },
    { nume: 'Marinescu', prenume: 'Mama', echipa: 'IT' }
  ],

  listaAngajatiAdaugati: [
    {
      nume: ' asdd',
      prenume: ' sads',
      echipa: 'svdfv'
    }
  ]
}
export function reducer(state, action) {
  switch (action.inputName) {
    case 'textNume':
      return { textNume: action.inputValue }
    case 'textPrenume':
      return { textPrenume: action.inputValue }
    case 'textEchipa':
      return { textEchipa: action.inputValue }
    case 'OnPropertyChanged':
      return OnPropertyChanged(state, action)
    case 'listaAngajatiDeAdaugat':
      return { listaAngajatiDeAdaugat: action.inputValue }
    case 'listaAngajatiAdaugati':
      return { listaAngajatiAdaugati: action.inputValue }
    default:
      throw new Error()
  }
}
function OnPropertyChanged(state, action) {
  const { propertyName, value } = action
  return { ...state, [propertyName]: value }
}
