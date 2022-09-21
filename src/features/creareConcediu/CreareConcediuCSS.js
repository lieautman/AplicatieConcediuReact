import { withTheme } from '@material-ui/core'

import { findLastIndex } from 'ramda'

const CreareConcediuCSS = theme => {
  return {
    StyleBtn: {
      align: 'center',
      fontStyle: 'normal',
      backgroundColor: '#26c6da',
      color: 'primary',
      border: '0 px',
      height: '50px',
      width: '150px',
      marginTop: '40px',
      marginLeft: '10px',
      borderRadius: '50px'
    },
    datePicker: { display: 'flex', marginTop: '1 rem' },

    formLabel: { display: 'flex', marginTop: '1rem', alignContent: 'space-between', marginLeft: '100px' },

    card: { display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '1rem' },
    title: { marginLeft: '70px' },
    stilTitlu: {
      color: '#555555',
      fontWeight: 'bold',
      borderRadius: '3px',
      textTransform: 'none',
      fontSize: '1.1428571428571428rem',
      fontFamily: 'Source Sans Pro',
      lineHeight: '1.75'
    }
  }
}

export default CreareConcediuCSS
