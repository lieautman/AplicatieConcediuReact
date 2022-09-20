import { withTheme } from '@material-ui/core'
import { findLastIndex } from 'ramda'

const Adauga_Angajatcss = theme => {
  return {
    StyleBtn: {
      fontStyle: 'normal',
      backgroundColor: '#1976d2',
      color: 'white',
      border: 'none',
      height: '50px',
      width: '150px',
      marginTop: '100px',
      marginLeft: '350px',
      borderRadius: '50px',
      fontSize: '15px'
    },
    containeradaugaaangajat: {
      color: '#1565c0',
      fontWeight: 'bold',
      fontSize: '20px',
      display: 'flex',
      marginLeft: '50px'
    },
    containeradaugaangajatleft: {
      marginLeft: '10px'
    },
    containeradaugaangajatright: {
      marginLeft: '200px'
    }
  }
}
export default Adauga_Angajatcss
