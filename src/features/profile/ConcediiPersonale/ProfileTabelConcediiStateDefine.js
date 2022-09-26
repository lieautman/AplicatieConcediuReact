export const initialState = {
  //date
  tableData: [
    {
      id: '1',
      name: 'Concediu medicalllll',
      dataInceput: '10/16/2022',
      dataSfarsit: '10/17/2022',
      inlocuitor: 'Andrei Ionescu',
      motiv: '',
      stareConcediu: 'Aprobat'
    },
    {
      id: '2',
      name: 'Concediu de odihna',
      dataInceput: '9/1/2022',
      dataSfarsit: '9/29/2022',
      inlocuitor: 'Maria Iancu',
      motiv: '',
      stareConcediu: 'Trimis'
    },
    {
      id: '3',
      name: 'Concediu de odihna',
      dataInceput: '8/28/2022',
      dataSfarsit: '8/30/2022',
      inlocuitor: 'Andreea Bogdan',
      motiv: '',
      stareConcediu: 'Respins'
    },
    {
      id: '4',
      name: 'Concediu de odihna',
      dataInceput: '8/28/2022',
      dataSfarsit: '8/30/2022',
      inlocuitor: 'Andreea Bogdan',
      motiv: '',
      stareConcediu: 'Respins'
    },
    {
      id: '5',
      name: 'Concediu de odihna',
      dataInceput: '8/28/2022',
      dataSfarsit: '8/30/2022',
      inlocuitor: 'Andreea Bogdan',
      motiv: '',
      stareConcediu: 'Respins'
    }
  ],
  indexStartActual:0,
  indexEndActual:5,
  numarElemPePag:5,
  numarPagini:1,
  isErrorOnTable: false,
}
export function reducer(state, action) {
  switch (action?.inputType) {
    case 'allObject':
      return { ...state, ...action?.inputValue }
    case 'field':
      return { ...state, [action?.inputName]: action?.inputValue }
    default:
      return { ...state }
  }
}
