import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DateIncarcate from './DateIncarcate'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#05241d',
    color: theme.palette.common.white,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

export default function TabelConcediu(props) {
  const { rows, setareId, esteAdmin, idRand } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {esteAdmin && <StyledTableCell padding='checkbox' align='center'></StyledTableCell>}
            <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
              Tipul Concediului
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
              Data de inceput
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
              Data de sfarsit
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
              Inlocuitor
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
              Motiv
            </StyledTableCell>
            <StyledTableCell align='center' style={{ fontWeight: 'bold' }}>
              Angajat
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <DateIncarcate row={row} key={row.id} setareId={setareId} esteAdmin={esteAdmin} idRand={idRand} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

TabelConcediu.propTypes = {
  setareId: PropTypes.func,
  rows: PropTypes.array.isRequired,
  esteAdmin: PropTypes.bool.isRequired,
  idRand: PropTypes.number
}
