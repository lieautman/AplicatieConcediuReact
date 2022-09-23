import * as React from 'react'
import { styled } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import RanduriAngajatiDePromovat from './RanduriAngajatiDePromovat'
import TableBody from '@material-ui/core/TableBody'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'

const useStyles = makeStyles(stilAngajati)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#05241d',
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

export default function TabelAngajatiDePromovat(props) {
  const { rows, setIdRand } = props
  const stilTabel = useStyles()
  return (
    <div>
      <TableContainer component={Paper}>
        <div className={stilTabel.tabel}>
          <Table sx={{ minWidth: 400 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell padding='checkbox'></StyledTableCell>
                <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                  Id
                </StyledTableCell>
                <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                  Nume
                </StyledTableCell>
                <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                  Prenume
                </StyledTableCell>
                <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                  Echipa
                </StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <RanduriAngajatiDePromovat row={row} key={index} index={index} setIdRand={setIdRand}></RanduriAngajatiDePromovat>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  )
}
TabelAngajatiDePromovat.propTypes = {
  rows: PropTypes.array.isRequired,
  setIdRand: PropTypes.func
}
