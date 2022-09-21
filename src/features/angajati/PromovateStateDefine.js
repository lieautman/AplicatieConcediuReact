export const initialState = {
  textNume: 'Popa',
  textPrenume: 'Adi',
  textEchipa: 'Marketing'
}
export function reducer(state, action) {
  switch (action.inputName) {
    case 'textNume':
      return { textNume: action.inputValue }
    case 'textPrenume':
      return { textPrenume: action.inputValue }
    case 'textEchipa':
      return { textEchipa: action.inputValue }
    default:
      throw new Error()
  }
}
