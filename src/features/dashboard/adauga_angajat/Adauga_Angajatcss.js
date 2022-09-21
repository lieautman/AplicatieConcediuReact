import { withTheme } from '@material-ui/core'
import { findLastIndex } from 'ramda'

const Adauga_Angajatcss = theme => {
  return {
    StyleBtn: {
      [theme.breakpoints.down('lg')]: {
        marginLeft: '13rem'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '30rem'
      },
      fontStyle: 'normal',
      backgroundColor: '#26c6da',
      color: ' white',
      border: 'none',
      height: '4rem',
      width: '10rem',
      marginTop: '5rem',
      borderRadius: '50px',
      fontSize: '15px'
    },
    containeradaugaaangajat: {
      color: '#1565c0',
      fontWeight: 'bold',
      fontSize: '5rem',
      [theme.breakpoints.down('lg')]: {
        display: 'inline'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex'
      },
      alignItems: 'center',
      flexDirection: 'row',
      margin: '0',
      padding: '0',
      marginTop: '3rem'
    },
    containeradaugaangajatleft: { marginLeft: '10rem' },
    containeradaugaangajatright: {
      [theme.breakpoints.down('lg')]: {
        marginLeft: '15rem'
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: '20rem'
      }
    },
    StyleTxt: {
      color: ' #05241d',
      fontWeight: 'bold',
      fontSize: '20px',
      alignSelf: 'center'
    },
    Combobox: {
      width: 250,
      marginTop: '1rem'
    },
    TextField: {
      marginTop: '1rem',
      width: 250
    },
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
export default Adauga_Angajatcss
