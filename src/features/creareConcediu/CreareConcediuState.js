export const initialState = {
  comboboxTipConcediu: '',
  datePikerIncepere: '',
  datePickerIncetare: '',
  comboboxInlocuitor: '',
  numarZileSelectat: '',
  numarZileDisponibile: '',
  comentarii: ''
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
