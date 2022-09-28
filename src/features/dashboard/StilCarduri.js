import { AdbRounded } from '@material-ui/icons'

const carduri = theme => {
  return {
    displayCarduri: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '1rem',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      }
    }
  }
}
export default carduri
