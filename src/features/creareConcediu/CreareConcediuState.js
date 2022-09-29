export const initialState = {
  tipConcediuId: '',
  dataInceput: new Date(),
  dataSfarsit: new Date(),
  angajatId: '',
  numarZileSelectat: '',
  numarZileDisponibile: '',
  comentarii: '',
  inlocuitorId: ''
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
