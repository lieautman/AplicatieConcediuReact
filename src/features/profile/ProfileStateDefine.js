export const initialState = {
  textNumePrenume: 'NUME SI PRENUME',
  textNume: 'Popa',
  textPrenume: 'Adi',
  textAdresa: 'ADRESA',
  textAdresaActuala: 'Str. Sperantei, Cartierul Fericirea, Sector 4, Bucuresti, Romania, cod postal 63700',
  textEmail: 'EMAIL',
  textEmailActual: 'adi_pop@yahoo.com',
  textTelefon: 'TELEFON',
  textTelefonActual: '07123112312',
  textFunctia: 'FUNCTIA',
  textFunctiaActuala: 'Administrator Aplicatie Concedii',
  textDataAngajare: 'DATA ANGAJARE',
  textDataAngajareActuala: '2011-01-22',
  textDataNastere: 'DATA NASTERE',
  textDataNastereActuala: '2001-01-12',
  textSalariu:'SALARIU',
  textSalariuActual:'5000',

  textCnp: 'COD NUMERIC PERSONAL',
  textCnpActual: '1234567890123',
  textSerieNumarCi: 'SERIE SI NUMAR CI',
  textSerieNumarCiActual: 'RK123123',

  textTabelConcedii: 'Concediile Mele',

  textAtasamente: 'Fisiere Atasate',
  textAtasamenteUpload: 'Incarca Fisier',
  textAtasamenteUploadTypes: 'PDF, DOC,PPT, JPG, PNG'
}
export function reducer(state, action) {
  switch (action.inputName) {
    case 'textNume':
      return { textNume: action.inputValue }
    case 'textPrenume':
      return { textPrenume: action.inputValue }
    case 'textAdresaActuala':
      return { textAdresaActuala: action.inputValue }
    case 'textEmailActual':
      return { textEmailActual: action.inputValue }
    case 'textTelefonActual':
      return { textTelefonActual: action.inputValue }
    case 'textFunctiaActuala':
      return { textFunctiaActuala: action.inputValue }
    case 'textDataAngajareActuala':
      return { textDataAngajareActuala: action.inputValue }
    case 'textDataNastereActuala':
      return { textDataNastereActuala: action.inputValue }
      case 'textSalariuActual':
        return { textSalariuActual: action.inputValue }
    case 'textCnpActual':
      return { textCnpActual: action.inputValue }
    case 'textSerieNumarCiActual':
      return { textSerieNumarCiActual: action.inputValue }
    default:
      throw new Error()
  }
}
