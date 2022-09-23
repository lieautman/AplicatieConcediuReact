export const initialState = {
  id: '',
  textNume: 'Popa',
  textPrenume: 'Adi',
  textEchipa: 'Marketing',
  echipa: null,
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
    case 'modificareListe':
      return modificareListe(state, action)
    // return { ...state, listaAngajatiDeAdaugat: action.inputValue }
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

function modificareListe(state, action) {
  const { actiune, index } = action
  let newListaAngajatiDeAdaugat = [...state.listaAngajatiDeAdaugat],
    newListaAngajatiAdaugati = [...state.listaAngajatiAdaugati]
  if (actiune === 'Scoatere') {
    const angajat = { ...state.listaAngajatiAdaugati[index] }
    newListaAngajatiDeAdaugat = [...newListaAngajatiDeAdaugat, angajat]
    newListaAngajatiAdaugati.splice(index, 1)
  } else if (actiune === 'Adaugare') {
    const angajat = { ...state.listaAngajatiDeAdaugat[index] }
    newListaAngajatiAdaugati = [...newListaAngajatiAdaugati, angajat]
    newListaAngajatiDeAdaugat.splice(index, 1)
  }
  return { ...state, listaAngajatiDeAdaugat: newListaAngajatiDeAdaugat, listaAngajatiAdaugati: newListaAngajatiAdaugati }
}
