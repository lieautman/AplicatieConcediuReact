import * as React from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import RanduriAngajati from './RanduriAngajati'
import TableBody from '@mui/material/TableBody'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'
import HeaderTabel from './HeaderTabelAngajati'

const useStyles = makeStyles(stilAngajati)

export default function TabelAngajati(props) {
  const { setareId, indexSelectat, filtrare } = props
  const stilTabel = useStyles()
  return (
    <div>
      <TableContainer component={Paper}>
        <div className={stilTabel.tabel}>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <HeaderTabel></HeaderTabel>
            <TableBody>
              {filtrare.map((row, i) => (
                <RanduriAngajati row={row} key={i} setareId={setareId} indexSelectat={indexSelectat}></RanduriAngajati>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  )
}
TabelAngajati.propTypes = {
  setareId: PropTypes.func,
  indexSelectat: PropTypes.number,
  filtrare: PropTypes.array
}
