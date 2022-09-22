export const initialState = {
  textNumePrenume: 'NUME SI PRENUME',
  Nume: 'Popa',
  Prenume: 'Adi',
  textAdresa: 'ADRESA',
  textAdresaActuala: 'Str. Sperantei, Cartierul Fericirea, Sector 4, Bucuresti, Romania, cod postal 63700',
  textEmail: 'EMAIL',
  Email: 'adi_pop@yahoo.com',
  textTelefon: 'TELEFON',
  Numartelefon: '07123112312',
  textFunctia: 'FUNCTIA',
  Functia: 'Administrator Aplicatie Concedii',
  textDataAngajare: 'DATA ANGAJARE',
  DataAngajarii: '2011-01-22',
  textDataNastere: 'DATA NASTERE',
  DataNasterii: '2001-01-12',
  textSalariu:'SALARIU',
  Salariu:'5000',

  textCnp: 'COD NUMERIC PERSONAL',
  Cnp: '1234567890123',
  textSerieNumarCi: 'SERIE SI NUMAR CI',
  SeriaNumarBuletin: 'RK123123',

  textTabelConcedii: 'Concediile Mele',

  textAtasamente: 'Fisiere Atasate',
  textAtasamenteUpload: 'Incarca Fisier',
  textAtasamenteUploadTypes: 'PDF, DOC,PPT, JPG, PNG'
}
export function reducer(state, action) {
  switch (action.inputType) {
    case 'allObject':
      return { ...state, ...action.inputValue}
    case 'field':
      return {  ...state, [action.inputName]: action.inputValue }
    default:
      throw new Error()
  }
}
