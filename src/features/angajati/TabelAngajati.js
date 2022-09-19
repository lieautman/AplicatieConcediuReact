import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import RanduriAngajati from './RanduriAngajati'
import TableBody from '@mui/material/TableBody'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import stilAngajati from './StilAngajati'

const useStyles = makeStyles(stilAngajati)

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

export default function TabelAngajati({ rows }) {
  const stilTabel = useStyles()
  return (
    <TableContainer component={Paper}>
      <div className={stilTabel.tabel}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                Nume
              </StyledTableCell>
              <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                Prenume
              </StyledTableCell>
              <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                Email
              </StyledTableCell>
              <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                Manager
              </StyledTableCell>
              <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
                Echipa
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, i) => (
              <RanduriAngajati row={row} key={i}></RanduriAngajati>
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  )
}
TabelAngajati.propTypes = {
  rows: PropTypes.array.isRequired
}
