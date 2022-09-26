import * as React from 'react'
import { styled } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import DateIncarcate from './DateIncarcate'
import PropTypes from 'prop-types'

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
  const { rows, setareId, concediiInAsteptareaAprobarii, idRand, filtrare, seFiltreaza } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            {concediiInAsteptareaAprobarii && <StyledTableCell padding='checkbox' align='center'></StyledTableCell>}
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
            <DateIncarcate
              row={row}
              key={row.id}
              setareId={setareId}
              concediiInAsteptareaAprobarii={concediiInAsteptareaAprobarii}
              idRand={idRand}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

TabelConcediu.propTypes = {
  setareId: PropTypes.func,
  rows: PropTypes.array.isRequired,
  concediiInAsteptareaAprobarii: PropTypes.bool.isRequired,
  idRand: PropTypes.number,
  filtrare: PropTypes.array,
  seFiltreaza: PropTypes.bool,
  nuSeFiltreaza: PropTypes.bool
}
