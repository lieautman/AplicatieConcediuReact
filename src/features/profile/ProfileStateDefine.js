export const initialState = {
  textNumePrenume: 'NUME SI PRENUME',
  Nume: 'Nume',
  Prenume: 'Prenume',
  textAdresa: 'ADRESA',
  textAdresaActuala: 'Str. Sperantei, Cartierul Fericirea, Sector 4, Bucuresti, Romania, cod postal 63700',
  textEmail: 'EMAIL',
  Email: 'Email',
  textTelefon: 'TELEFON',
  Numartelefon: '0000000000',
  textFunctia: 'FUNCTIA',
  Functia: 'Administrator Aplicatie Concedii',
  textDataAngajare: 'DATA ANGAJARE',
  DataAngajarii: '2000-01-01',
  textDataNastere: 'DATA NASTERE',
  DataNasterii: '2000-01-01',
  textSalariu:'SALARIU',
  Salariu:'Salariu',

  textCnp: 'COD NUMERIC PERSONAL',
  Cnp: 'Cnp',
  textSerieNumarCi: 'SERIE SI NUMAR CI',
  SeriaNumarBuletin: 'Serie si Numar Buletin',

  textTabelConcedii: 'Concediile Mele',

  textAtasamente: 'Fisiere Atasate',
  textAtasamenteUpload: 'Incarca Fisier',
  textAtasamenteUploadTypes: 'PDF, DOC,PPT, JPG, PNG',

  isErrorOnUpdate: false,
}
export function reducer(state, action) {
  switch (action?.inputType) {
    case 'allObject': 
      return { ...state, ...action?.inputValue};
    case 'field':
      return {  ...state, [action?.inputName]: action?.inputValue }
    default:
      return { ...state}
  }
}
