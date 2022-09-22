import * as React from 'react'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export default function RanduriAngajatiDePromovat(props) {
  const { row, idRand, setIdRand, index } = props
  return (
    <StyledTableRow key={row.name}>
      <Checkbox
        color='primary'
        checked={idRand && idRand === row.id}
        onChange={() => setIdRand(index)}
        inputProps={{
          'aria-label': 'select all desserts'
        }}
      />
      <StyledTableCell component='th' scope='row' align='center'>
        {row.id}
      </StyledTableCell>
      <StyledTableCell component='th' scope='row' align='center'>
        {row.nume}
      </StyledTableCell>
      <StyledTableCell align='center'>{row.prenume}</StyledTableCell>
      <StyledTableCell align='center'>{row.echipa}</StyledTableCell>
    </StyledTableRow>
  )
}

RanduriAngajatiDePromovat.propTypes = {
  row: PropTypes.object.isRequired,
  idRand: PropTypes.number,
  setIdRand: PropTypes.func,
  index: PropTypes.number
}
