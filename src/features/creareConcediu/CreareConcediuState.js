export const initialState = {
  ComboboxTipConcediu: null,
  DatePikerIncepere: null,
  DatePickerIncetare: null,
  ComboboxInlocuitor: null,
  NumarZileSelectat: null,
  NumarZileDisponibile: null,
  Comentarii: null
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
