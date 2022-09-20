import { withTheme } from '@material-ui/core'

import { findLastIndex } from 'ramda'

const CreareConcediuCSS = theme => {
  return {
    StyleBtn: {
      align: 'center',

      fontStyle: 'normal',

      backgroundColor: '#1565c0',

      color: 'primary',

      border: '0 px',

      height: '50px',

      width: '150px',

      marginTop: '40px',

      marginLeft: '10px',

      borderRadius: '50px'
    },
    datePicker: { display: 'flex' },

    formLabel1: { display: 'flex', marginTop: '1rem', alignContent: 'space-between' },

    formLabel2: { display: 'flex', marginTop: '1rem' },

    card: { display: 'flex', alignItems: 'center', flexDirection: 'column' },
    title: { marginLeft: '70px' }
  }
}

export default CreareConcediuCSS
